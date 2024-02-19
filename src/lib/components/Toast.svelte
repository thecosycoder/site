<script>
  export let toastMessage = "Copied";
  let active = true;
</script>

<div
  class="toast fixed right-0 bottom-0 mr-8 mb-8 p-2 bg-smoke text-platinum rounded shadow-md"
  class:hidden={!active}
  class:block={active}
>
  {toastMessage}
</div>
