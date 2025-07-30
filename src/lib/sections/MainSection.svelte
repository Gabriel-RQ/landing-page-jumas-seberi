<script>
  import { CTA } from "$lib/components";
  import { ChevronDownCircleIcon } from "@lucide/svelte";
</script>

<section id="inicio" class="relative column-system bg-jumas-blue z-1">
  <div class="col-span-full lg:col-span-9 lg:col-start-3 mt-34 space-y-6">
    <blockquote
      cite="https://www.maeperegrina.org.br/noticias/10-frases-do-pe-kentenich-sobre-a-santidade/"
    >
      <h2 class="main-title text-balance">
        “Deus espera de nós a santidade pessoal. A Mãe de Deus pede-nos,
        pessoalmente, elevada santidade.”
      </h2>
    </blockquote>
    <p class="quotation text-right">—<cite>Pe. Kentenich</cite></p>
  </div>

  <div
    class="col-span-full md:col-span-6 md:col-start-2 lg:col-span-4 lg:col-start-5 space-y-10"
  >
    <CTA text="Conheça o movimento" href="#sobre" class="w-full" />
    <ChevronDownCircleIcon class="size-14 animate-bounce  mx-auto" />
  </div>
</section>

<style>
  section::before {
    background: url("/img/santuario.webp") no-repeat 50% bottom / auto 80%;
    content: "";
    inset: 0;
    mask-image: linear-gradient(180deg, transparent 25%, black);
    position: absolute;
    z-index: -10;

    @media screen and (width >= 48rem) {
      background-size: 100% 80%;
    }
  }
</style>
