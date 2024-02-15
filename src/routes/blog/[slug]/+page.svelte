<script>
  export let data;
  const { title, date, update, tags, Content } = data;

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };

  let dateFormatted;
  let updateFormatted;

  function formatDate(dateToFormat, formatted) {
    let validDate = Date.parse(dateToFormat);

    if (!isNaN(validDate)) {
      formatted = new Date(dateToFormat).toLocaleDateString('en-gb', options);
    }

    return formatted;
  }

  dateFormatted = formatDate(date, dateFormatted);
  updateFormatted = formatDate(update, updateFormatted);
</script>

<header class="bg-brandeis">
  <section class="max-w-6xl w-full mx-auto px-4 py-12 md:py-16">
    <h1 class="mb-6 md:mb-12 text-4xl sm:text-6xl md:text-8xl text-platinum capitalize">
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
              class="relative text-platinum before:content-[''] before:block before:absolute before:bottom-1 before:left-0 before:w-1/2 before:h-4 before:bg-gradient-to-r before:from-platinum before:opacity-60 before:transition before:duration-200 before:ease-in-out before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:origin-left"
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

<article class="article max-w-xl w-full mx-auto px-4">
  <Content />
</article>
