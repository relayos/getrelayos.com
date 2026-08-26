# RelayOS WordPress Theme

## BLUF

This directory contains the bundled RelayOS headless WordPress theme source.

Use it when you need to change WordPress content types, WordPress taxonomies, or
theme-owned REST endpoints consumed by the public site. Do not put tenant IRC
config, production secrets, OAuth client registration, SMTP credentials, DNS, or
deployment selection in this theme.

## What This Theme Owns

| Surface | File | Current behavior |
| --- | --- | --- |
| Theme metadata | [style.css](style.css) | Declares the `RelayOS Headless` WordPress theme. |
| Product content model | [functions.php](functions.php) | Registers the `product` custom post type and `product_type` taxonomy with REST visibility. |
| Solution content model | [functions.php](functions.php) | Registers the `solution` custom post type and `solution_category` taxonomy with REST visibility. |
| Testimonials | [functions.php](functions.php) | Registers the `testimonial` custom post type with REST visibility. |
| Contact endpoint | [functions.php](functions.php) | Serves `POST /wp-json/relayos/v1/contact`, validates required fields, sends mail with `wp_mail`, and stores a private contact post. |
| Signup endpoint | [functions.php](functions.php) | Serves `POST /wp-json/relayos/v1/signup` and creates a WordPress user. |
| Headless CORS | [functions.php](functions.php) | Adds permissive CORS headers for headless API usage. |

## Change Path

1. Edit [functions.php](functions.php) or [style.css](style.css).
2. Keep public REST route names stable unless the Next.js caller changes in the
   same pull request.
3. Update the root [README](../../../README.md) if the top-level source map or
   deployment boundary changes.
4. Run the repository checks:

   ```bash
   npm run lint
   npm run build
   npm test
   ```

5. Open a focused pull request in this repo.
6. Promote the resulting site or WordPress runtime through the deployment-owned
   GitOps path after merge.

## Runtime Boundary

The theme is source code only. Managed environments provide WordPress container
selection, database credentials, SMTP configuration, OAuth clients, Turnstile
keys, hostnames, TLS certificates, and tenant/platform placement outside this
repo.

If a change requires a secret or hostname, update the deployment registry or the
owning runtime repo instead of hard-coding the value in this theme.

## Agent Contract

- Treat route names, custom post type names, taxonomy names, and response shapes
  as public contracts once the Next.js site consumes them.
- Keep validation and sanitization explicit for every request parameter accepted
  by a public REST endpoint.
- Do not add production-only assumptions to local Compose examples.
- Keep this README current when adding a new theme-owned API or content model.
