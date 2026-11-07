# lucascockerham.com

Personal site of Lucas Cockerham — Strategic Director of Engineering. Home, about, experience, and contact pages.

Live: https://lucascockerham.com

## Stack

- [Astro](https://astro.build) (static output) + Tailwind CSS
- Deployed to Cloudflare Workers as static assets (`wrangler.jsonc` serves `./dist`)

## Development

Requires Node 22.23.4+.

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## License

The source code is released under the [MIT License](LICENSE).

The site content (text, the headshot, and other images) is © Lucas Cockerham, all rights reserved, and is not covered by the MIT License.
