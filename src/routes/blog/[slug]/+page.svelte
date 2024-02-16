<script>
  import { onMount } from "svelte";
  import { formatDate } from "$lib/utils/formatting.js";
  export let data;
  const { title, date, update, tags, Content } = data;

  let tocEntries = [];

  onMount(async () => {
    const headings = document.querySelectorAll(
      ".article h1, .article h2, .article h3, .article h4"
    );

    tocEntries = headings;
  });

  let dateFormatted;
  let updateFormatted;

  dateFormatted = formatDate(date, dateFormatted);
  updateFormatted = formatDate(update, updateFormatted);
</script>

<header class="bg-brandeis">
  <section class="max-w-6xl w-full mx-auto px-4 py-12 md:py-16">
    <h1
      class="mb-6 md:mb-12 text-4xl sm:text-6xl md:text-8xl text-platinum capitalize"
    >
      {title}
    </h1>

    <div class="flex gap-4 flex-col md:flex-row justify-between">
      <div class="tags flex flex-wrap gap-x-4">
        {#if dateFormatted != null}
          <p class="text-platinum">Published: {dateFormatted}</p>
        {/if}
        {#if updateFormatted != null}
          <p class="hidden sm:inline text-platinum">-</p>
          <p class="text-platinum">Updated: {updateFormatted}</p>
        {/if}
      </div>
      <div class="tags flex gap-x-4">
        {#if tags.length}
          {#each tags as tag}
            <a
              class="relative z-10 text-platinum before:content-[''] before:block before:absolute before:bottom-1 before:left-0 before:w-1/2 before:h-4 before:bg-gradient-to-r before:from-platinum before:opacity-60 before:transition before:duration-200 before:ease-in-out before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:origin-left before:-z-10"
              href="/blog/tag/{tag}"
            >
              #{tag}
            </a>
          {/each}
        {/if}
      </div>
    </div>
  </section>
</header>

<section class="container mx-auto">
  <aside class="sticky top-24 ml-auto mt-8 mr-8 h-0 max-w-xs w-full">
    <div
      class="py-2 px-4 text-platinum bg-gradient-to-r from-cool-grey rounded-t"
    >
      <h2 class="font-sans font-semibold">Navigation</h2>
    </div>
    <ul class="py-2 px-4">
      {#each tocEntries as tocEntry}
        <li>
          <a
            class="toc-entry toc-{tocEntry.tagName.toLowerCase()} text-charcoal text-sm"
            href="#{tocEntry.id}">{tocEntry.innerText}</a
          >
        </li>
      {/each}
    </ul>
  </aside>

  <article class="article max-w-xl w-full mx-auto px-4">
    <Content />
  </article>
</section>
