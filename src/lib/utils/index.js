export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob("/src/routes/blog/*.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(11, -3);

      return {
        meta: metadata,
        path: postPath,
      };
    })
  );

  return allPosts;
};

export const fetchTopRoutes = async () => {
  const topRoutes = import.meta.glob("/src/routes/*/+page.svelte");
  const iterableTopRoutes = Object.entries(topRoutes);

  const allUrls = await Promise.all(
    iterableTopRoutes.map(async ([path]) => {
      const url = path.slice(12, -13);

      return {
        path: url,
      };
    })
  );

  return allUrls;
};
