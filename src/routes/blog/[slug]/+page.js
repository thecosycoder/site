import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
  const post = await import(`../../../lib/posts/${params.slug}.md`);
  const { title, date, update, summary, tags, readingTime } = post.metadata;
  const Content = post.default;

  // Fix this
  if (!post) {
    error(404, {
      message: 'Not found'
    });
  }

  return {
    title,
    date,
    update,
    summary,
    tags,
    readingTime,
    Content
  };
};
