import { CollectionConfig } from "payload/types";

import { fullTitle } from "./fields/fullTitle";
import { slugField } from "./fields/slug";

// const blocks = [Hero];
const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    preview: (doc, { locale }) => {
      if (doc?.slug) {
        return `/${doc.slug}?locale=${locale}`;
      }

      return null;
    },
    defaultColumns: ["title", "slug", "updatedAt"],
  },
  versions: {
    drafts: true,
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      admin: {
        description: "This is an internal name",
      },
    },
    fullTitle,
    slugField(),
  ],
};

export default Pages;
