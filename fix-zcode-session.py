# -*- coding: utf-8 -*-
"""
修复 ZCode “六合初鸣 / 六合初鸣2” 会话消息不显示的问题。

原因：这两个会话处于“检查点回滚(rewind)”状态（session.revert 字段被冻结在回滚
时刻），界面上回滚点之后的所有消息（包括你新发送的）都不会渲染；同时 13:26
启动的一个回合一直在循环未结束，导致新消息卡在输入队列(status=admitted)。

用法（重要）：必须先【完全退出 ZCode】（不是只关窗口），再运行：
    python fix-zcode-session.py
运行完成后再打开 ZCode。
"""
import os
import shutil
import sqlite3
import sys
import datetime

DB = os.path.join(os.path.expanduser("~"), ".zcode", "cli", "db", "db.sqlite")

# 六合初鸣2 与 六合初鸣(v1) —— 两个会话都冻结在回滚状态，一并清理
SESSIONS = [
    "sess_0ccd79f2-7dfa-4c64-bbca-70a2f199490f",  # 六合初鸣2
    "sess_b6b932e6-2dfa-4c0e-b8b0-fa9df5472e65",  # 六合初鸣
]


def main():
    if not os.path.exists(DB):
        print("找不到数据库:", DB)
        sys.exit(1)

    ts = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
    bak = DB + ".bak-" + ts
    shutil.copy2(DB, bak)
    for ext in ("-wal", "-shm"):
        if os.path.exists(DB + ext):
            shutil.copy2(DB + ext, bak + ext)
    print("已备份数据库到:", bak)

    con = sqlite3.connect(DB, timeout=15)
    cur = con.cursor()

    for sid in SESSIONS:
        cur.execute("UPDATE session SET revert=NULL WHERE id=?", (sid,))
        title = cur.execute(
            "SELECT title FROM session WHERE id=?", (sid,)
        ).fetchone()
        name = title[0] if title else sid
        print("已清除回滚状态: %s (影响行数 %d)" % (name, cur.rowcount))

    # 不删任何消息、不动输入队列：排队中的消息等回合结束后会正常显示
    con.commit()
    con.close()
    print("完成。现在可以重新打开 ZCode。")


if __name__ == "__main__":
    main()
