# iamjosuho.github.io

GitHub Pages site for a management-oriented personal portfolio.

## Files

- `index.html`: Single-page public site
- `favicon.svg`: Browser tab icon
- `og-preview.svg`: Social preview image for Open Graph and Twitter cards
- `site-plan.md`: Content and positioning plan

## Local Preview

Because this is a static site, any simple file server works.

Example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages Deployment

For a user site repository named `iamjosuho.github.io`:

1. Push the default branch to GitHub.
2. In GitHub, open `Settings` > `Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select your default branch and `/ (root)`.
5. Save and wait for the site to publish.

Expected production URL:

`https://iamjosuho.github.io/`

## Before Publishing

- Replace the placeholder contact text in `index.html` with your real `Email` and `LinkedIn`
- Confirm that `og:url` and `og:image` still match the final production domain
- If you later use a custom domain, update these meta tags:
  - `og:url`
  - `og:image`
  - `twitter:image`

## Custom Domain

If you later bind a custom domain:

1. Add a `CNAME` file at the repo root with your domain.
2. Update DNS records at your domain provider.
3. In GitHub Pages settings, confirm the custom domain and enable HTTPS.
4. Update the metadata URLs in `index.html` to the custom domain.
