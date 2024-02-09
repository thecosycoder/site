<script>
  import { onMount } from 'svelte'; 

  let routes = [];

  onMount(async () => {
    const res = await fetch(`/api/routes`);
    routes = await res.json();
  });
</script>

<nav>
	<ul class="container mx-auto px-4 flex gap-4 justify-center">
		<li class="capitalize"><a href="/">Home</a></li>
    {#each routes as route}
      <li class="capitalize"><a href="/{route.path}">{route.path}</a></li>
    {/each}
  </ul>
</nav>