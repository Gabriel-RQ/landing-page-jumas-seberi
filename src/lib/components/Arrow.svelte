<script lang="ts">
  import type { Snippet } from "svelte";

  type ArrowSvgProps = {
    class?: string;
    width?: number;
    height?: number;
  };

  type ArrowProps = {
    height?: number;
    width?: number;
    class?: string;
    arrow?: Snippet<
      [
        {
          svg?: Snippet<[props: ArrowSvgProps]>;
          width?: number;
          height?: number;
        },
      ]
    >;
    text?: string;
    textPosition?: "left" | "right" | "top" | "bottom";
  };

  let {
    height = 24,
    width = 24,
    class: className,
    text,
    textPosition = "right",
    arrow,
  }: ArrowProps = $props();

  const flexDirectionMap = {
    right: "flex-row",
    left: "flex-row-reverse",
    top: "flex-col-reverse",
    bottom: "flex-col",
  };
</script>

{#snippet ArrowSvg({ class: className, ...restProps }: ArrowSvgProps)}
  <svg
    {...restProps}
    class={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.719 37.719C31.5782 37.8599 31.4991 38.0509 31.4991 38.25C31.4991 38.4492 31.5782 38.6402 31.719 38.781C31.8598 38.9219 32.0508 39.001 32.25 39.001C32.4492 39.001 32.6402 38.9219 32.781 38.781L43.281 28.281C43.3508 28.2114 43.4063 28.1286 43.4441 28.0375C43.4819 27.9464 43.5013 27.8487 43.5013 27.75C43.5013 27.6514 43.4819 27.5537 43.4441 27.4626C43.4063 27.3715 43.3508 27.2887 43.281 27.219L32.781 16.719C32.6402 16.5782 32.4492 16.4991 32.25 16.4991C32.0508 16.4991 31.8598 16.5782 31.719 16.719C31.5782 16.8599 31.4991 17.0509 31.4991 17.25C31.4991 17.4492 31.5782 17.6402 31.719 17.781L40.9395 27H23.25C13.7235 27 6 19.2765 6 9.75003C6 9.55112 5.92099 9.36035 5.78033 9.2197C5.63968 9.07905 5.44892 9.00003 5.25 9.00003C5.05109 9.00003 4.86032 9.07905 4.71967 9.2197C4.57902 9.36035 4.5 9.55112 4.5 9.75003C4.5 20.106 12.894 28.5 23.25 28.5H40.9395L31.719 37.719Z"
      fill="#FEFEFE"
    />
  </svg>
{/snippet}

<div
  class="w-max flex {[flexDirectionMap[textPosition]]} items-center {className}"
>
  {#if arrow}
    {@render arrow({ height, width, svg: ArrowSvg })}
  {:else}
    {@render ArrowSvg({ width, height })}
  {/if}
  <span class="cursive-disclaimer">{text}</span>
</div>
