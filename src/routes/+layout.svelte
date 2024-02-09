<script>
  import '$src/css/app.css'

  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';

	import { fly } from 'svelte/transition';
	import { quartIn, quadOut } from 'svelte/easing';

  export let data;
</script>

<Header />
{#key data.currentRoute}
<main in:fly={{ duration: 220, delay: 240, y: 10, ease: quartIn }} out:fly={{ duration: 200, y: -10, ease: quadOut }}>
	<slot />
</main>
{/key}
<Footer />

<style lang="postcss">
	:global(html) {
	  background-color: theme(colors.cream);
	}

	:global(main, div, p, a, li, label, input, button) {
		font-family: theme(fontFamily.sans);
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: theme(fontFamily.serif);
	}

	:global(main, div, p) {
		color: theme(colors.smoke);
	}

	:global(code, pre) {
		font-family: theme(fontFamily.mono);
	}
</style>