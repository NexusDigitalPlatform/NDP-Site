import type { NextConfig } from "next";

// Static export for GitHub Pages deployment.
// Project pages are served from https://<org>.github.io/NDP-Site/, so a
// basePath is required in CI. The deploy workflow sets GITHUB_PAGES=true.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = "/NDP-Site";

const nextConfig: NextConfig = {
  output: "export",
  // next/image optimization needs a server; disable it for static export.
  images: { unoptimized: true },
  ...(isGithubPages ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
