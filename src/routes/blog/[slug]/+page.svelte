<script>
  export let data;
  const { title, date, update, tags, Content } = data;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  let dateFormatted;
  let updateFormatted;

  function formatDate(dateToFormat, formatted) {
    let timestamp = Date.parse(dateToFormat);

    if (!isNaN(timestamp)) {
      formatted = new Date(dateToFormat).toLocaleDateString("en-gb", options);
    }

    return formatted;
  }

  dateFormatted = formatDate(date, dateFormatted);
  updateFormatted = formatDate(update, updateFormatted);
</script>

<header class="bg-brandeis">
  <section class="max-w-6xl w-full mx-auto px-4 py-12 md:py-16">
    <h1 class="mb-6 md:mb-12 text-6xl md:text-8xl text-platinum capitalize">
      {title}
    </h1>

    <div class="flex gap-4 flex-col md:flex-row justify-between">
      {#if dateFormatted != null}
        <p class="text-platinum">Published: {dateFormatted}</p>
      {/if}
      {#if updateFormatted != null}
        <p class="text-platinum">Updated: {updateFormatted}</p>
      {/if}
      <div class="tags flex gap-x-4 gap-y-2">
        {#if tags.length}
          {#each tags as tag}
            <a class="text-platinum" href="/blog/tag/{tag}">
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
