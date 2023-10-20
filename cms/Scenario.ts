import { Block, CollectionConfig } from 'payload/types';

const GroupBlock: Block = {
  slug: 'group-block', // required
  // imageURL: 'https://google.com/path/to/image.jpg',
  // imageAltText: 'A nice thumbnail image to show what this block looks like',
  fields: [
    // required
    {
      name: 'group',
      type: 'relationship',
      relationTo: 'group',
    },
  ],
};

const Scenario: CollectionConfig = {
  slug: 'scenario',
  admin: {
    useAsTitle: 'title',
    group: 'Risk Factor',
    defaultColumns: ['title', 'createdAt', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'group', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [
        // required
        GroupBlock,
      ],
    },
  ],
};

export default Scenario;
