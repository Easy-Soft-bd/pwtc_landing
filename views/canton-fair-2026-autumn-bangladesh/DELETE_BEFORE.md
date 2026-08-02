# TEMPORARY — Remove After Canton Fair 2026 Campaign Ends

This folder and its home-page CTA are **temporary promotional assets**. Delete them when the campaign is no longer needed (e.g. after Autumn Canton Fair 2026 concludes).

## Files & folders to delete

1. **This entire folder**
   ```
   views/canton-fair-2026-autumn-bangladesh/
   ```

2. **App route**
   ```
   app/canton-fair-2026-autumn-bangladesh/
   ```

## Home page cleanup

In `views/home/index.tsx`, remove:

- The import: `import CantonFairHomeCta from "@/views/canton-fair-2026-autumn-bangladesh/components/CantonFairHomeCta";`
- The component usage **directly after `<Hero />`**:
  ```tsx
  <CantonFairHomeCta />
  ```

## Optional config cleanup

If `CANTON_FAIR_ROUTE` or canton fair links were added to `lib/config.ts` → `routes`, remove those entries as well.

## Verify after deletion

- Run `npm run build` — should pass with no missing imports.
- Confirm `/canton-fair-2026-autumn-bangladesh` returns 404.
- Confirm home page no longer shows the Canton Fair banner or modal.
