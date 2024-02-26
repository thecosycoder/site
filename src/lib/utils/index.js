export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('/src/lib/posts/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(15, -3);
      const fullPath = `blog/${postPath}`;

      return {
        meta: metadata,
        path: fullPath
      };
    })
  );

  return allPosts;
};

export const fetchTopRoutes = async () => {
  const topRoutes = import.meta.glob('/src/routes/*/+page.svelte');
  const iterableTopRoutes = Object.entries(topRoutes);

  const allUrls = await Promise.all(
    iterableTopRoutes.map(async ([path]) => {
      const url = path.slice(12, -13);

      return {
        path: url
      };
    })
  );

  return allUrls;
};
