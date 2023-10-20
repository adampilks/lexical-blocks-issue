import { formatAppUrl } from './formatAppUrl';

export const formatPreviewURL = (doc: any): string => {
  return `${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/preview?url=${formatAppUrl({
    doc,
  })}`;
};
