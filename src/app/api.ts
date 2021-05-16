// Some API methods...

import { sleep } from "app/utils";

export const getVersion = async () => {
  const resp = await fetch("/api/version", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  await sleep(2);

  if (!resp.ok) {
    throw new Error("Fetch error!");
  }

  return await resp.json();
};
