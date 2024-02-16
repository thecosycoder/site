<script>
  import { onMount } from "svelte";
  import { formatDate } from "$lib/utils/formatting.js";

  let posts = [];
  let dateFormatted;

  const newOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  onMount(async () => {
    const res = await fetch(`/api/posts`);
    posts = await res.json();
  });
</script>

<section>
  <header class="bg-brandeis">
    <section class="max-w-6xl w-full mx-auto px-4 py-12 md:py-16">
      <h1
        class="mb-6 md:mb-12 text-4xl sm:text-6xl md:text-8xl text-platinum capitalize"
      >
        Blog Home
      </h1>
    </section>
  </header>
  <section class="px-4">
    <ul>
      {#each posts as post}
        <li class="max-w-3xl w-full mx-auto py-8 border-b border-cool-grey">
          <div>
            <a class="group block mb-6" href={post.path}>
              <h2
                class="relative text-3xl mb-6 before:content-[''] before:block before:absolute before:bottom-1 before:left-0 before:w-1/2 before:h-7 before:bg-gradient-to-r before:from-coral before:transition before:duration-200 before:ease-in-out before:scale-x-0 before:origin-left group-hover:before:scale-x-100 group-hover:before:origin-left before:-z-10"
              >
                {post.meta.title}
              </h2>
              {#if post.meta.summary}
                <p>{post.meta.summary}</p>
              {/if}
            </a>
            <div class="flex gap-4 justify-between">
              <p>
                {(dateFormatted = formatDate(
                  post.meta.date,
                  dateFormatted,
                  newOptions,
                ))}
              </p>

              <div class="flex gap-4">
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
      {/each}
    </ul>
  </section>
</section>
