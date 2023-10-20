// next.config.js
const path = require("path");
const { withPayload } = require("@payloadcms/next-payload");

module.exports = withPayload(
  {
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
    transpilePackages: ["@payloadcms/plugin-seo"],
    headers: () => [
      {
        // Force disable caching for any NextAuth api routes. We need to do this because by default
        // these API endpoints do not return a Cache-Control header.
        source: "/api/auth/:slug",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, max-age=0",
          },
        ],
      },
    ],
  },
  {
    configPath: path.resolve(__dirname, "payload.config.ts"),
    payloadPath: path.resolve(process.cwd(), "payloadClient.ts"),
    // Set a custom Payload admin route (optional, default is `/admin`)
    // NOTE: Read the "Set a custom admin route" section in the payload/next-payload README.
    adminRoute: "/admin",
  },
);
