<script>
  import { fly } from 'svelte/transition';

  export let toastMessage = 'Copied';
  export let toastTime = 2000;
  let active = false;

  export function pop() {
    active = true;

    setTimeout(() => {
      active = false;
    }, toastTime);
  }
</script>

{#if active}
  <div
    transition:fly={{ duration: 250, y: 20 }}
    class="toast fixed right-0 bottom-0 mr-8 mb-8 p-2 bg-smoke text-platinum rounded shadow-md"
  >
    {toastMessage}
  </div>
{/if}
