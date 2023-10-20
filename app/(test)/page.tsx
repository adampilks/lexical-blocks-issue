import React from "react";
import { getPayloadClient } from "../../payloadClient";

async function getPage() {
  const payload = await getPayloadClient();

  const getPage = await payload.find({
    collection: "pages",
    where: {
      slug: {
        equals: "home",
      },
    },
  });

  const page = getPage.docs[0];

  if (!page) {
    return null;
  }

  return page;
}

const TestPage = async () => {
  const p = await getPage();
  return <main>Hello world</main>;
};

export default TestPage;
