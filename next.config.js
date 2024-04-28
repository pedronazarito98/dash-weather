/** @type {import('next').NextConfig} */
const stylexPlugin = require("@stylexjs/nextjs-plugin");

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  transpilePackages: ["@stylexjs/open-props"],

  swcMinify: true,
  experimental: {
    optimizeFonts: false,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = stylexPlugin({
  rootDir: __dirname,
})(nextConfig);
