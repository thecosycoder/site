<script>
  export let data;
  const { title, date, tags, Content } = data;
</script>

<header class="bg-brandeis">
	<section class="container mx-auto p-16">
		<h1 class="text-8xl text-platinum">{title}</h1>
		<p class="text-platinum">Published: {date}</p>
	</section>
</header>

<article class="article max-w-xl w-full mx-auto">
  <Content />

  {#if tags.length}
    <aside>
      <h2>Posted in:</h2>
      <ul>
        {#each tags as tag}
          <li>
            <a href="/blog/tag/{tag}">
              {tag}
            </a>
          </li>
        {/each}
      </ul>
    </aside>
  {/if}
</article>
