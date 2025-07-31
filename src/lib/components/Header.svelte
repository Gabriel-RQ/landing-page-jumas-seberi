<script lang="ts">
  import { onMount } from "svelte";
  import ColorBand from "./ColorBand.svelte";
  import HamburguerMenu from "./HamburgerMenu.svelte";
  import { CTA } from "./io";
  import Logo from "./Logo.svelte";
  import { MenuIcon } from "@lucide/svelte";

  const navOptions: { title: string; href: string }[] = [
    {
      title: "Início",
      href: "#inicio",
    },
    {
      title: "Sobre nós",
      href: "#sobre",
    },
    {
      title: "Atividades",
      href: "#atividades",
    },
    {
      title: "Contato",
      href: "#contato",
    },
  ];

  let showBackground = $state(false);
  let currentSection = $state("#inicio");

  onMount(() => {
    const showBackgroundObserver = new IntersectionObserver(
      ([entry]) => (showBackground = !entry.isIntersecting),
      { threshold: 0.2 }
    );

    const currentSectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentSection = "#" + entry.target.id;
        }
      },
      {
        threshold: 0.8,
      }
    );

    navOptions.forEach((navOption) => {
      const target = document.querySelector(navOption.href);
      if (!target) return;
      currentSectionObserver.observe(target);
    });

    const homeSection = document.getElementById("inicio");
    if (homeSection) showBackgroundObserver.observe(homeSection);

    return () => {
      showBackgroundObserver.disconnect();
      currentSectionObserver.disconnect();
    };
  });
</script>

{#snippet navList({ onclick }: { onclick: (() => void) | null })}
  {#each navOptions as { title, href } (href)}
    <li
      class={{
        "text-white text-shadow-2xs text-shadow-jumas-white transition-shadow":
          href === currentSection,
      }}
    >
      <a {href} {onclick}>
        {title}
      </a>
    </li>
  {/each}
{/snippet}

<header
  class="fixed w-full px-4 md:px-10 lg:px-20 pt-5 md:pt-10 lg:grid lg:grid-cols-[1fr_2fr_1fr] flex justify-between items-center z-10 {showBackground
    ? 'bg-black/25'
    : ''}"
>
  <ColorBand />
  <Logo />

  <nav class="hidden lg:block lg:justify-self-center">
    <ul class="flex text-xl font-medium gap-6">
      {@render navList({ onclick: null })}
    </ul>
  </nav>

  <div
    class="md:gap-12 justify-self-end self-start md:flex md:self-auto md:items-center"
  >
    <CTA
      href="/faca-parte"
      text="Quero participar"
      class="text-base! hidden! md:inline-block! px-2! py-3!"
    />

    <HamburguerMenu {navList}>
      {#snippet trigger({ onclick })}
        <button
          aria-label="Botão de menu"
          title="Alternar o menu"
          class="lg:hidden"
          {onclick}
        >
          <MenuIcon class="size-9" />
        </button>
      {/snippet}
    </HamburguerMenu>
  </div>
</header>
