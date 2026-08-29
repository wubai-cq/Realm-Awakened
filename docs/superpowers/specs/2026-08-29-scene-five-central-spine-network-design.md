# Scene 05 Central-Spine Network

## Decision

Use option A from the visual comparison: a slanted central spine runs through the Voronoi volume, with irregular short branches and a small number of detached peripheral tails.

## Rendering behavior

- Keep the existing Voronoi foam points and cube silhouette unchanged.
- Select a deterministic sequence of backbone nodes along a diagonal axis.
- Preserve backbone-to-backbone edges and add links between adjacent backbone samples when the Voronoi graph has a gap.
- Keep a controlled subset of backbone branches and sparse peripheral edges.
- Continue suppressing outer cube-outline edges so the network does not become a wireframe box.

## Verification

- Timeline tests assert the selected network style is central-spine/branches.
- Browser checks use ?t=31.7 for the white neural-web state and ?t=35.6 for the lit state.
- Full test suite and production build must pass.
