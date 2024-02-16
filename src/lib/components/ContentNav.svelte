<script>
  export let tocEntries = [];
</script>

{#if tocEntries.length}
  <aside
    class="max-w-xl w-full mb-8 mx-auto px-4 xl:sticky xl:top-24 xl:mb-0 xl:ml-auto xl:mr-none xl:mr-8 xl:h-0 xl:max-w-xs"
  >
    <div
      class="py-2 px-4 text-platinum bg-gradient-to-r from-cool-grey rounded-t"
    >
      <h2 class="font-sans font-semibold">Navigation</h2>
    </div>
    <ul class="py-2 px-4">
      {#each tocEntries as tocEntry}
        <li class="toc-entry toc-{tocEntry.tagName.toLowerCase()} py-1">
          <a
            class="block text-charcoal text-sm transition hover:text-coral"
            href="#{tocEntry.id}">{tocEntry.innerText}</a
          >
        </li>
      {/each}
    </ul>
  </aside>
{/if}

<style>
  .toc-entry.toc-h3,
  .toc-entry.toc-h4 {
    @apply border-l border-cool-grey;
  }
  .toc-entry.toc-h3 > a {
    @apply pl-2;
  }
  .toc-entry.toc-h4 > a {
    @apply pl-4;
  }
</style>
