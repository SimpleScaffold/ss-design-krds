# KRDS Upstream Test Verifiers

## Source

- Repository: [KRDS-uiux/krds-uiux](https://github.com/KRDS-uiux/krds-uiux)
- Package: `krds-uiux` v1.1.0

## Automated Test Status

No automated test verifiers were found in the upstream `krds-uiux` repository.

The upstream package is an HTML Component Kit without a bundled test suite. Validation in ss-design-krds is provided externally via:

- `scripts/krds-similarity.mjs` — structural and a11y rule scoring
- `scripts/verify-krds-component-coverage.mjs` — component reference tracking
- `scripts/validate-krds.mjs` — repository integrity checks

## Manual Verification

When updating vendored assets from upstream:

1. Compare file counts between `assets/krds/` and upstream clone
2. Run `npm run krds:index` to regenerate component spec skeletons
3. Run `npm run krds:build-sample` to rebuild the experiment page
4. Run `npm run krds:validate` to confirm baseline scores
