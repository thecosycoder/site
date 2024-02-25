<script>
  import { onMount } from 'svelte';
  import { formatDate } from '$lib/utils/formatting.js';

  let posts = [];
  let tags = [];
  let uniqueTags = [];
  let recentPostNum = 6;
  let dateFormatted;

  const newOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };

  onMount(async () => {
    const res = await fetch(`/api/posts`);
    posts = await res.json();

    posts.forEach((post) => {
      post.meta.tags.forEach((tag) => {
        tags.push(tag);
      });
    });

    uniqueTags = [...new Set(tags)].sort();
  });
</script>

<section class="container max-w-6xl mx-auto pt-8 px-4">
  <strong class="mb-8">Welcome!</strong>
  <h1
    class="relative my-8 mr-4 px-2 text-4xl sm:text-6xl md:text-8xl before:content-[''] before:block before:absolute before:bottom-0 before:left-0 before:-z-10 before:w-1/2 before:max-h-10 before:h-1/2 before:bg-gradient-to-r before:from-coral"
  >
    I'm The Cosy Coder
  </h1>
  <p class="mt-8 pb-8 text-lg font-bold border border-b-cool-grey">
    I make content about web developement and tech in general. Enjoy!
  </p>
</section>

<section class="container max-w-6xl mx-auto py-8 px-4">
  <h2
    class="relative mb-8 mr-4 px-2 text-2xl sm:text-4xl md:text-6xl before:content-[''] before:block before:absolute before:bottom-0 before:left-0 before:-z-10 before:w-1/2 before:max-h-6 before:h-1/2 before:bg-gradient-to-r before:from-brandeis"
  >
    Recent Posts:
  </h2>

  <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
    {#each posts as post, i}
      {#if i < recentPostNum}
        <li class="w-full p-4 md:p-6 border border-cool-grey">
          <div class="flex flex-col h-full">
            <a class="group block mb-6" href={post.path}>
              <h2
                class="relative text-2xl sm:text-3xl mb-6 capitalize before:content-[''] before:block before:absolute before:bottom-1 before:left-0 before:w-1/2 before:h-7 before:bg-gradient-to-r before:from-brandeis before:transition before:duration-200 before:ease-in-out before:scale-x-0 before:origin-left group-hover:before:scale-x-100 group-hover:before:origin-left before:-z-10"
              >
                {post.meta.title}
              </h2>
              {#if post.meta.summary}
                <p>{post.meta.summary}</p>
              {/if}
            </a>
            <div class="mt-auto flex flex-col md:flex-row gap-4 justify-between">
              <p>
                {(dateFormatted = formatDate(post.meta.date, dateFormatted, newOptions))}
              </p>

              <div class="flex flex-wrap gap-x-4 gap-y-2">
                {#each post.meta.tags as tag}
                  <a
                    class="relative text-brandeis before:content-[''] before:block before:absolute before:bottom-1 before:left-0 before:w-1/2 before:h-4 before:bg-gradient-to-r before:from-brandeis before:opacity-60 before:transition before:duration-200 before:ease-in-out before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:origin-left before:-z-10"
                    href="/blog/tag/{tag}"
                  >
                    #{tag}
                  </a>
                {/each}
              </div>
            </div>
          </div>
        </li>
      {/if}
    {/each}
  </ul>
</section>

<div class="bg-brandeis">
  <section class="max-w-6xl w-full mx-auto px-4 py-8 text-platinum">
    <h3 class="mb-8 text-2xl sm:text-3xl">Post Categories:</h3>
    <div class="max-w-3xl w-full flex flex-wrap gap-x-4 gap-y-2">
      {#each uniqueTags as tag}
        <a
          class="relative z-10 text-xl before:content-[''] before:block before:absolute before:bottom-1 before:left-0 before:w-1/2 before:h-4 before:bg-gradient-to-r before:from-platinum before:opacity-60 before:transition before:duration-200 before:ease-in-out before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:origin-left before:-z-10"
          href="/blog/tag/{tag}"
        >
          #{tag}
        </a>
      {/each}
    </div>
  </section>
</div>
