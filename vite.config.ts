import { defineConfig, loadEnv } from "vite";
import type { HtmlTagDescriptor } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const configuredUrl = env.VITE_SITE_URL?.trim() || "https://my-portfolio-nu-rust-99.vercel.app/";
  let siteUrl: URL | undefined;

  if (configuredUrl) {
    siteUrl = new URL(configuredUrl);
    if (!["https:", "http:"].includes(siteUrl.protocol) || siteUrl.username || siteUrl.password) {
      throw new Error("VITE_SITE_URL must be your public HTTP or HTTPS portfolio URL.");
    }
    siteUrl.search = "";
    siteUrl.hash = "";
    if (!siteUrl.pathname.endsWith("/")) siteUrl.pathname += "/";
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "portfolio-social-metadata",
        transformIndexHtml() {
          // Social crawlers need static, absolute URLs from the real deployment.
          // The default is the public portfolio URL supplied by its owner.
          if (!siteUrl) return [];
          const imageUrl = new URL("og.png", siteUrl).href;
          const tags: HtmlTagDescriptor[] = [
            { tag: "link", attrs: { rel: "canonical", href: siteUrl.href } },
            { tag: "meta", attrs: { property: "og:url", content: siteUrl.href } },
            { tag: "meta", attrs: { property: "og:image", content: imageUrl } },
            { tag: "meta", attrs: { property: "og:image:type", content: "image/png" } },
            { tag: "meta", attrs: { property: "og:image:width", content: "1733" } },
            { tag: "meta", attrs: { property: "og:image:height", content: "907" } },
            { tag: "meta", attrs: { property: "og:image:alt", content: "KingsMind, Full-Stack Developer. React, TypeScript, Node.js, PostgreSQL." } },
            { tag: "meta", attrs: { name: "twitter:image", content: imageUrl } },
            { tag: "meta", attrs: { name: "twitter:image:alt", content: "KingsMind, Full-Stack Developer" } },
          ];
          return tags;
        },
      },
    ],
  };
});
