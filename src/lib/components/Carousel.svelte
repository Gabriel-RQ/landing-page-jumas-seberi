<script lang="ts">
  import { onMount, type Snippet } from "svelte";

  type CarouselProps = {
    children: Snippet;
  };

  let { children }: CarouselProps = $props();

  let container: HTMLDivElement | undefined = $state();
  let currentIndex = $state(0);
  let isVisible = $state(false);

  setInterval(() => {
    if (container && isVisible) {
      currentIndex = (currentIndex + 1) % container.childElementCount;
      navigateTo(currentIndex);
    }
  }, 2500);

  function navigateTo(index: number) {
    if (container) {
      container.children[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }

  function handleScroll() {
    if (container) {
      const scrollPosition = container.scrollLeft;
      const itemWidth = container.children[0].clientWidth + 16;
      currentIndex = Math.round(scrollPosition / itemWidth);
    }
  }

  onMount(() => {
    const isVisibleObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 1 }
    );

    if (container) isVisibleObserver.observe(container);

    return () => isVisibleObserver.disconnect();
  });
</script>

<div>
  <div
    class="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory *:snap-center"
    bind:this={container}
    onscroll={handleScroll}
  >
    {@render children()}
  </div>

  <div class="flex justify-center gap-3 mt-3">
    {#each { length: container?.childElementCount } as _, i}
      <button
        class="rounded-full size-3 bg-gray-400 transition-colors"
        class:bg-jumas-white={i === currentIndex}
        aria-label="Controle do carrossel de imagens"
        onclick={() => navigateTo(i)}
      ></button>
    {/each}
  </div>
</div>
