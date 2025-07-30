<script lang="ts">
  import { XIcon } from "@lucide/svelte";
  import { type Snippet } from "svelte";
  import { slide } from "svelte/transition";
  import { sineInOut } from "svelte/easing";
  import { ColorBand } from ".";

  type HamburgerMenuProps = {
    open?: boolean;
    navList: Snippet<[{ onclick: () => void }]>;
    trigger: Snippet<[{ onclick: () => void }]>;
  };

  let {
    open = $bindable(false),
    navList,
    trigger,
  }: HamburgerMenuProps = $props();
</script>

{@render trigger({ onclick: () => (open = true) })}

{#if open}
  <div
    class="fixed bg-jumas-blue inset-0 column-system grid-rows-[auto_1fr]"
    transition:slide={{ axis: "x", duration: 250, easing: sineInOut }}
  >
    <ColorBand />

    <button class="-col-end-1 justify-self-end" onclick={() => (open = false)}>
      <XIcon class="size-9 md:size-12" />
    </button>

    <nav class="m-auto col-span-full font-montserrat">
      <ul
        class="flex flex-col text-4xl md:text-5xl font-bold gap-14 text-center"
      >
        {@render navList({ onclick: () => (open = false) })}
      </ul>
    </nav>
  </div>
{/if}
