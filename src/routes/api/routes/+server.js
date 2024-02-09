import { fetchTopRoutes } from "$lib/utils";
import { json } from "@sveltejs/kit";

export const GET = async () => {
  const allUrls = await fetchTopRoutes();

  return json(allUrls);
};
