<script>
  import { Carousel, Link } from "$lib/components";

  const images = [
    "/img/salinha.webp",
    "/img/santuario-2.webp",
    "/img/bandeira.webp",
  ];
</script>

<section
  id="atividades"
  class="column-system bg-jumas-green grid-rows-[auto_auto_auto_1fr] overflow-clip"
>
  <h2 class="section-title">Veja um pouco das nossas atividades</h2>

  <div class="col-span-full mt-5 space-y-8">
    <p class="section-content">
      Nossas atividades incluem os encontros, onde discutimos aspectos da fé
      católica e do movimento de Schoenstatt e retiros, onde fortalecemos nossa
      espirtualidade e participamos de diversas atividades em grupo. Também
      somos responsáveis pelos cantos da Santa Missa uma vez ao mês, e
      participamos dos eventos da Juventude Masculina e do movimento de
      Schoenstatt, tanto a nível regional quanto a nível nacional.
    </p>

    <p class="section-content">
      Além disso, anualmente organizamos nossa já clássica janta, da qual os
      fundos levantados são utilizados para custear as atividades do ramo ao
      longo do ano.
    </p>
  </div>

  <div
    class="col-span-full md:col-span-4 md:col-start-3 lg:col-span-3 lg:col-start-1"
  >
    <Link text="Venha fazer parte!" type="internal" href="/faca-parte" />
  </div>

  <div class="col-span-full m-auto lg:col-span-5 lg:col-start-7">
    <Carousel>
      {#each images as image}
        <img
          src={image}
          alt="Imagem das atividades do Jumas"
          class="border-jumas-white border-6 rounded-xs shadow"
        />
      {/each}
    </Carousel>
  </div>
</section>
