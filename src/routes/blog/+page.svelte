<script>
  import { onMount } from "svelte";

  let posts = [];

  onMount(async () => {
    const res = await fetch(`/api/posts`);
    posts = await res.json();
  });
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
