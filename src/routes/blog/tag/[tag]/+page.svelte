<script>
	export let data;
	const { tag, posts } = data;
</script>

<article>
	<h1>{tag}</h1>

	<ul>
		{#each posts as post}
			<li>
				<h2>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
				Published {post.meta.date}
			</li>
		{/each}
	</ul>
</article>