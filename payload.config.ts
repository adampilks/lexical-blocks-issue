import dotenv from "dotenv";
import { buildConfig } from "payload/config";
import seo from "@payloadcms/plugin-seo";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
// import { slateEditor } from "@payloadcms/richtext-slate";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import MainMenu from "./cms/globals/MainMenu";

// Core types
import Media from "./cms/Media";
import Pages from "./cms/Pages";
import Users from "./cms/Users";

dotenv.config();

export default buildConfig({
  admin: {
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({}),
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Media, Users, Pages],
  localization: {
    locales: ["en", "es"],
    defaultLocale: "en",
    fallback: true,
  },
  globals: [MainMenu],
  plugins: [
    seo({
      collections: ["pages"],
      uploadsCollection: "media",
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
});
