<script>
  import { onMount } from 'svelte';
  import DarkSwitch from './DarkSwitch.svelte';

  let routes = [];

  onMount(async () => {
    const res = await fetch(`/api/routes`);
    routes = await res.json();
  });
</script>

<nav>
  <div class="max-w-6xl mx-auto px-4 flex gap-4 items-center justify-between">
    <a
      class="relative z-10 pl-1 font-serif text-xl before:content-[''] before:block before:absolute before:bottom-0 before:left-0 before:-z-10 before:w-full before:h-full before:bg-gradient-to-r before:from-coral"
      href="/">.CC</a
    >
    <ul class="flex gap-4">
      <li
        class="capitalize relative z-10 before:content-[''] before:block before:absolute before:bottom-1 before:left-0 before:w-1/2 before:h-4 before:bg-gradient-to-r before:from-cool-gray before:opacity-60 before:transition before:duration-200 before:ease-in-out before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:origin-left before:-z-10"
      >
        <a href="/">Home</a>
      </li>
      {#each routes as route}
        <li
          class="capitalize relative z-10 before:content-[''] before:block before:absolute before:bottom-1 before:left-0 before:w-1/2 before:h-4 before:bg-gradient-to-r before:from-cool-gray before:opacity-60 before:transition before:duration-200 before:ease-in-out before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:origin-left before:-z-10"
        >
          <a href="/{route.path}">{route.path}</a>
        </li>
      {/each}
      <DarkSwitch />
    </ul>
  </div>
</nav>
