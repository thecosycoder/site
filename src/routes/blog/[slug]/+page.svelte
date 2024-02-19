<script>
  import { onMount } from 'svelte';
  import { formatDate } from '$lib/utils/formatting.js';
  import ContentNav from '$components/ContentNav.svelte';
  import Toast from '$components/Toast.svelte';
  export let data;
  const { title, date, update, tags, Content } = data;

  let dateFormatted;
  let updateFormatted;
  let headings;
  let toast;

  dateFormatted = formatDate(date, dateFormatted);
  updateFormatted = formatDate(update, updateFormatted);

  onMount(async () => {
    headings = document.querySelectorAll('.article h1, .article h2, .article h3, .article h4');

    headings.forEach(function (heading) {
      heading.addEventListener('click', function (e) {
        let headingUrl = heading.children[0].href;
        e.preventDefault();

        navigator.clipboard.writeText(headingUrl);
        toast.pop();
      });
    });
  });
</script>

<header class="bg-brandeis">
  <section class="max-w-6xl w-full mx-auto px-4 py-12 md:py-16 text-platinum">
    <h1 class="mb-6 md:mb-12 text-4xl sm:text-6xl md:text-8xl capitalize">
      {title}
    </h1>

    <div class="flex gap-4 flex-col md:flex-row justify-between">
      <div class="tags flex flex-wrap gap-x-4">
        {#if dateFormatted != null}
          <p>Published: {dateFormatted}</p>
        {/if}
        {#if updateFormatted != null}
          <p class="hidden sm:inline">-</p>
          <p>Updated: {updateFormatted}</p>
        {/if}
      </div>
      <div class="tags flex gap-x-4">
        {#if tags.length}
          {#each tags as tag}
            <a
              class="relative z-10 before:content-[''] before:block before:absolute before:bottom-1 before:left-0 before:w-1/2 before:h-4 before:bg-gradient-to-r before:from-platinum before:opacity-60 before:transition before:duration-200 before:ease-in-out before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:origin-left before:-z-10"
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

<section class="mt-8 mx-auto xl:container">
  <ContentNav tocEntries={headings} />

  <article class="article max-w-xl w-full mx-auto px-4">
    <Content />
  </article>
</section>
<Toast bind:this={toast} toastMessage="Link Copied!" />
