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

<style lang="postcss">
	:global(html) {
	  background-color: theme(colors.cream);
	}

	:global(main, div, p, a, label, input, button) {
		font-family: theme(fontFamily.sans);
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: theme(fontFamily.serif);
	}

	:global(code, pre) {
		font-family: theme(fontFamily.mono);
	}
</style>