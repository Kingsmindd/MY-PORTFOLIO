# KingsMind portfolio

A React and TypeScript portfolio featuring the Personal Finance Tracker and Space Tourism projects.

## Development

- Run `npm run dev` to start the Vite development server.
- Run `npm run build` to type-check and build the production site.
- Run `npm run lint` to check the source.

## Content

- `src/data/Project.ts`: project descriptions, screenshots, source links, and the finance tracker case study.
- `src/data/Profile.ts`: email, GitHub, availability, LinkedIn, and résumé link.
- `src/data/TechStack.ts`: skills.
- `src/index.css`: shared light/dark colors, typography, and responsive layouts.

LinkedIn and résumé links are intentionally hidden until actual values are supplied. To add a résumé, place the finished PDF in `public/` and set `resumeUrl` to its public path in `Profile.ts`. Set `linkedin` to your real profile URL.

## Social sharing

The generated sharing card is stored in `public/og.png`.

The default public URL is `https://my-portfolio-nu-rust-99.vercel.app/`. If you move the site, set `VITE_SITE_URL` in your hosting build environment (or in a local `.env.local` file), then rebuild. The Vite configuration writes the canonical URL, Open Graph URL, and absolute image URLs into the built HTML.

The page title, description, Open Graph text, and Twitter/X text are in `index.html`. Sharing crawlers can read the built metadata without running JavaScript.

## Theme

The saved theme takes priority over the system preference. The initial theme is applied before React loads to avoid a flash of the wrong background. Light and dark colors are defined together in `src/index.css`.

## Contact form

The contact section posts name, email, and message directly to FormSubmit using the recipient in `src/data/Profile.ts`. Visitors do not need an email app. The form uses the FormSubmit AJAX endpoint and displays sending, success, and error feedback without leaving the page. Inputs are locked while sending to prevent duplicate submissions, and failed requests preserve the message. Requests time out after 20 seconds without automatic retries. AJAX does not show an interactive reCAPTCHA; spam filtering is handled by the provider. No API key is required in the browser.

Before relying on delivery:
1. Run the site on localhost or deploy the updated site.
2. Submit a message through the form yourself.
3. Open the FormSubmit activation email in `umehprince536@gmail.com` (check spam) and confirm the form.
4. Submit another message and verify inbox delivery and the Reply-To address.

Changing the recipient may require activating the new address. Delivery is not verified by the production build or lint checks. FormSubmit documentation: https://formsubmit.co/
