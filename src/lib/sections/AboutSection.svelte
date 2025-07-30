<script>
  import { Link } from "$lib/components";
</script>

<section
  id="sobre"
  class="column-system bg-jumas-red grid-rows-[auto_1fr] relative z-1 overflow-hidden"
>
  <h2 class="col-span-full section-title">Saiba mais sobre nosso movimento</h2>

  <div class="col-span-full lg:col-span-8 space-y-8 mt-9">
    <img
      src="/img/kentenich.webp"
      alt=""
      class="float-right -right-8 md:-right-[40px] relative lg:absolute lg:right-0 lg:bottom-0 lg:mb-0"
    />
    <p class="section-content">
      O movimento de Schoenstatt foi fundado pelo Pe. Josef Kentenich, em 1914,
      e tem como centro de sua espiritualidade a aliança de amor com Maria.
    </p>

    <p class="section-content">
      A Juventude masculina de Schoenstatt é um movimento católico mariano que
      busca, por meio de uma pedagogia própria, formar “homens novos”: jovens
      comprometidos com a fé e a comunidade.
    </p>

    <p class="section-content">
      Fundado em 2012, o Jumas Seberi, estabelecido na Paróquia Nossa Senhora da
      Paz, tem uma longa e bem sucedida história de envolvimento com a
      comunidade e como ramo da Juventude Masculina no estado, e no país.
    </p>

    <div class="col-span-full space-y-6 mt-4">
      <Link
        text="Saiba mais sobre o Jumas"
        href="https://jumasbrasil.com.br/"
      />
      <Link
        text="Saiba mais sobre Schoenstatt"
        href="https://schoenstatt.org.br/"
      />
    </div>
  </div>
</section>

<style>
  img {
    shape-outside: url("/img/kentenich.webp");
    shape-image-threshold: 0.5;
    shape-margin: 0.5rem;
  }
</style>
