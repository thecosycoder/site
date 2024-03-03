<script>
  import { onMount } from "svelte";
  let darkTheme;
  let htmlElement;
  let switchTheme;

  onMount(async () => {
    htmlElement = document.documentElement;

    if (
      localStorage.theme == "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      htmlElement.classList.add("dark");
      darkTheme = true;
    } else {
      htmlElement.classList.remove("dark");
      darkTheme = false;
    }

    switchTheme = () => {
      darkTheme = !darkTheme;

      if (darkTheme == true) {
        htmlElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        htmlElement.classList.remove("dark");
        localStorage.removeItem("theme");
      }
    };
  });
</script>

<button
  on:click={switchTheme}
  class="relative rounded-full bg-platinum shadow-inner-lg p-1 w-12"
>
  <span
    class="absolute top-1 left-1 block h-4 w-4 rounded-full bg-coral transition-all"
    class:left-7={darkTheme}
  ></span>
</button>
