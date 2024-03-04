export const prerender = true;

export const load = async ({ fetch }) => {
  const res = await fetch(`/api/posts`);
  const posts = await res.json();

  let tags = [];
  let uniqueTags = [];

  posts.forEach((post) => {
    post.meta.tags.forEach((tag) => {
      tags.push(tag);
    });
  });

  uniqueTags = [...new Set(tags)].sort();

  return {
    posts,
    uniqueTags
  };
};
