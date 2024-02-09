<script>
	export let data;
	const { title, date, tags, Content } = data;
</script>

<article class="w-full">
	<h1>{title}</h1>
	<p>Published: {date}</p>
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