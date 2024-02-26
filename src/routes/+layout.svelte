<script>
  import '$lib/css/app.css';

  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';

  import { fade, fly } from 'svelte/transition';
  import { quartIn, quadOut } from 'svelte/easing';

  export let data;
</script>

<Header />
{#key data.currentRoute}
  <main
    class="dark:bg-charcoal"
    in:fly={{ duration: 220, delay: 120, y: 10, ease: quartIn }}
    out:fade={{ duration: 100, ease: quadOut }}
  >
    <slot />
  </main>
{/key}
<Footer />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.platinum);
  }

  :global(::selection, ::-moz-selection) {
    background: theme(backgroundColor.cool-gray);
  }

  :global(main, a, li, label, input, button) {
    font-family: theme(fontFamily.sans);
  }

  :global(h1, h2, h3, h4, h5, h6, h1 > a, h2 > a, h3 > a, h4 > a, h5 > a, h6 > a) {
    font-family: theme(fontFamily.serif);
  }

  :global(main) {
    color: theme(colors.smoke);
  }

  :global(code, pre) {
    font-family: theme(fontFamily.mono);
  }

  :global(hr) {
    border-color: theme(borderColor.cool-gray);
  }
</style>
