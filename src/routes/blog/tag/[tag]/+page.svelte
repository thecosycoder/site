<script>
  import { formatDate } from "$lib/utils/formatting.js";

  let dateFormatted;

  const newOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  export let data;
  const { tag, posts } = data;
</script>

<section>
  {#if posts.length}
    <header class="bg-brandeis">
      <section class="max-w-6xl w-full mx-auto px-4 py-12 md:py-16">
        <h1
          class="mb-6 md:mb-12 text-4xl sm:text-6xl md:text-8xl text-platinum capitalize"
        >
          Tagged {tag}
        </h1>
      </section>
    </header>
    <section class="px-4">
      <ul>
        {#each posts as post}
          <li class="max-w-3xl w-full mx-auto py-8 border-b border-cool-gray">
            <div>
              <a class="group block mb-6" href={post.path}>
                <h2
                  class="relative z-10 text-3xl mb-6 capitalize before:content-[''] before:block before:absolute before:bottom-1 before:left-0 before:w-1/2 before:h-7 before:bg-gradient-to-r before:from-coral before:transition before:duration-200 before:ease-in-out before:scale-x-0 before:origin-left group-hover:before:scale-x-100 group-hover:before:origin-left before:-z-10"
                >
                  {post.meta.title}
                </h2>
                {#if post.meta.summary}
                  <p>{post.meta.summary}</p>
                {/if}
              </a>
              <div class="flex flex-col md:flex-row gap-4 justify-between">
                <p>
                  {(dateFormatted = formatDate(
                    post.meta.date,
                    dateFormatted,
                    newOptions
                  ))}
                </p>

                <div class="flex flex-wrap gap-x-4 gap-y-2">
                  {#each post.meta.tags as tag}
                    <a
                      class="relative z-10 text-brandeis before:content-[''] before:block before:absolute before:bottom-1 before:left-0 before:w-1/2 before:h-4 before:bg-gradient-to-r before:from-brandeis before:opacity-60 before:transition before:duration-200 before:ease-in-out before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:origin-left before:-z-10"
                      href="/blog/tag/{tag}"
                    >
                      #{tag}
                    </a>
                  {/each}
                </div>
              </div>
              <p class="mt-2 text-cool-gray">{post.meta.readingTime.text}</p>
            </div>
          </li>
        {/each}
      </ul>
    </section>
  {:else}
    <header class="bg-brandeis">
      <section class="max-w-6xl w-full mx-auto px-4 py-12 md:py-16">
        <h1
          class="mb-6 md:mb-12 text-4xl sm:text-6xl md:text-8xl text-platinum capitalize"
        >
          Sorry, no posts tagged {tag}
        </h1>
      </section>
    </header>
    <section class=" max-w-3xl w-full mx-auto py-8 px-4">
      <a
        href="/"
        class="inline-block capitalize relative z-10 text-lg text-brandeis before:content-[''] before:block before:absolute before:bottom-1 before:left-0 before:w-1/2 before:h-full before:bg-gradient-to-r before:from-brandeis before:opacity-60 before:transition before:duration-200 before:ease-in-out before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:origin-left before:-z-10"
        >Home</a
      >
    </section>
  {/if}
</section>
