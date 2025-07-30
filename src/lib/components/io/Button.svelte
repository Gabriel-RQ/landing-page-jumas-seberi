<script lang="ts">
  import type { Snippet } from "svelte";

  type ButtonProps = {
    onclick?: () => void;
    variant?: "yellow" | "blue";
    children: Snippet;
    class?: string;
  };

  let {
    onclick,
    variant = "blue",
    children,
    class: className,
  }: ButtonProps = $props();
</script>

<button
  {onclick}
  class="{variant === 'blue'
    ? 'bg-jumas-blue'
    : 'bg-jumas-yellow'} px-12 py-6 rounded-lg font-semibold {className}"
>
  {@render children()}
</button>
