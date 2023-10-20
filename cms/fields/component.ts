import { Field } from 'payload/types';

const component: Field = {
	name: 'component-field',
	type: 'relationship',
	relationTo: ['users'],
	hasMany: true,
};

export default component;
