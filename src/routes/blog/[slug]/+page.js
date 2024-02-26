import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
  try {
    const post = await import(`../../../lib/posts/${params.slug}.md`);
    const { title, date, update, summary, tags, readingTime } = post.metadata;
    const Content = post.default;

    return {
      title,
      date,
      update,
      summary,
      tags,
      readingTime,
      Content
    };
  } catch (err) {
    error(404, err);
  }
};
