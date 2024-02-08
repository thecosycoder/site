<script>
 import { getRoutes } from '$lib/utils/routes';

let routes = getRoutes();
</script>

<nav>
	<ul class="container mx-auto px-4 flex gap-4 justify-center">
		  <li class="capitalize"><a href="/">Home</a></li>
	{#each routes as route}
	  {#if route.path != '/api'}
		  <li class="capitalize"><a href={route.path}>{route.name}</a></li>
		{/if}
	{/each}
	</ul>
</nav>