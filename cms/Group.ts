import { Block, CollectionConfig } from "payload/types";

import { fullTitle } from "./fields/fullTitle";

const Group: CollectionConfig = {
  slug: "group",
  admin: {
    useAsTitle: "title",
    group: "Risk Factor",
    defaultColumns: ["title", "slug", "createdAt", "updatedAt"],
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
  ],
};

export default Group;
