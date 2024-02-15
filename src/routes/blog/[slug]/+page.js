import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
  try {
    const post = await import(`$blog/${params.slug}.md`);
    const { title, date, update, tags } = post.metadata;
    const Content = post.default;

    return {
      title,
      date,
      update,
      tags,
      Content
    };
  } catch (err) {
    error(404, err);
  }
};
