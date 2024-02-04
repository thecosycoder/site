<script>
  import '$src/css/app.css'
	import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
	import { fade } from 'svelte/transition';
	export let data;
</script>

<Header />
{#key data.currentRoute}
<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
	<slot />
</main>
{/key}
<Footer />