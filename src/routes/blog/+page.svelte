<script>
export let data;
const { posts } = data;
</script>

<section>
	<h1>Blog Home</h1>

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
</section>