export const formatAppUrl = ({ doc }): string => {
  const pathToUse = doc.slug === 'home' ? '' : doc.slug;
  const { pathname } = new URL(`${process.env.PAYLOAD_PUBLIC_SITE_URL}/${pathToUse}`);
  return pathname;
};
