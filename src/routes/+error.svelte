<script>
  import { page } from "$app/stores";
</script>

<section class="max-w-6xl mx-auto py-8 px-4">
  <h1
    class="relative z-10 mb-8 mr-4 px-2 text-2xl sm:text-4xl md:text-6xl before:content-[''] before:block before:absolute before:bottom-0 before:left-0 before:-z-10 before:w-1/2 before:max-h-6 before:h-1/2 before:bg-gradient-to-r before:from-red-500"
  >
    Error
  </h1>
  <p class="mt-8 pb-8 text-xl font-bold">
    {$page.status}: {$page.error.message}
  </p>
</section>
