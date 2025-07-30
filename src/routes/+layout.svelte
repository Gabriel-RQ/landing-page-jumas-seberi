<script lang="ts">
  import { Header } from "$lib/components";
  import "../app.css";

  let { children } = $props();
</script>

<Header />

<main>
  {@render children()}
</main>

<footer
  class="text-jumas-blue font-montserrat bg-jumas-yellow text-center space-y-6 p-4"
>
  <p>&copy; Jumas Seberi 2025</p>
</footer>
