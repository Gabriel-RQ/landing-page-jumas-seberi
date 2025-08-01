<script lang="ts">
  import {
    PUBLIC_EMAILJS_KEY,
    PUBLIC_EMAILJS_SERVICE_ID,
    PUBLIC_EMAILJS_TEMPLATE_ID,
  } from "$env/static/public";
  import { Arrow, Button, Input, TextArea } from "$lib/components";
  import emailjs from "@emailjs/browser";
  import { AlertTriangleIcon, CheckIcon } from "@lucide/svelte";
  import { scale } from "svelte/transition";

  let emailStatus = $state({
    show: false,
    success: false,
  });

  $effect(() => {
    if (emailStatus.show) {
      setTimeout(() => (emailStatus.show = false), 5_000);
    }
  });

  function sendEmail(
    event: SubmitEvent & {
      currentTarget: EventTarget & HTMLFormElement;
    }
  ) {
    event.preventDefault();
    emailjs
      .sendForm(
        PUBLIC_EMAILJS_SERVICE_ID,
        PUBLIC_EMAILJS_TEMPLATE_ID,
        event.currentTarget,
        {
          publicKey: PUBLIC_EMAILJS_KEY,
        }
      )
      .then(() => {
        emailStatus.show = true;
        emailStatus.success = true;
      })
      .catch((error) => {
        emailStatus.show = true;
        emailStatus.success = false;
        console.error(error);
      });
    event.currentTarget.reset();
  }
</script>

<section
  id="contato"
  class="column-system bg-jumas-yellow grid-rows-[auto_auto_auto_1fr]"
>
  <h2 class="section-title">Entre em contato conosco</h2>
  <h3 class="section-subtitle mt-2">
    Interessado em participar? Quer tirar uma dúvida? Fale conosco.
  </h3>

  <form
    class="col-span-full lg:col-span-5 space-y-4 lg:mt-14"
    onsubmit={sendEmail}
    method="POST"
  >
    <Input label="Seu email" name="email" type="email" required />
    <TextArea label="Sua mensagem" name="message" required />
    <Button class="w-full" type="submit">Enviar</Button>

    {#if emailStatus.show}
      <span
        class="font-medium px-2 py-4 w-full inline-flex justify-center items-center gap-4 rounded-lg {emailStatus.success
          ? 'bg-jumas-green'
          : 'bg-jumas-red'}"
        transition:scale
        class:text-green-50={emailStatus.success}
        class:text-red-50={!emailStatus.success}
      >
        {#if emailStatus.success}
          <CheckIcon class="size-9 stroke-current" />
        {:else}
          <AlertTriangleIcon class="size-9 stroke-current" />
        {/if}
        {emailStatus.success
          ? "Mensagem enviada com sucesso!"
          : "Erro ao enviar mensagem"}
      </span>
    {/if}
  </form>

  <address
    class="col-span-full lg:col-span-6 lg:col-start-7 space-y-3 lg:mt-14"
  >
    <p class="font-bold">Informações de contato da paróquia</p>
    <p>Endereço: Tv. Cel. Andrade Neves, 82 - Centro, Seberi - RS, 98380-000</p>
    <p>Telefone: (55) 3746-1166</p>

    <div class="w-full h-50 md:h-80 rounded-lg overflow-hidden shadow">
      <iframe
        class="size-full"
        title="Posição da Paróquia Nossa Senhora da Paz em Seberi, no mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.6759987159357!2d-53.405466323729705!3d-27.479344576314066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb8288ba10a6b9%3A0x716719b4c7a72187!2sPar%C3%B3quia%20Nossa%20Senhora%20da%20Paz!5e0!3m2!1spt-BR!2sbr!4v1753905948114!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen={false}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <div class="space-y-3 text-center lg:text-left">
      <p class="text-xl">Nossas redes sociais</p>

      <div class="inline-flex gap-6">
        <a
          href="https://www.instagram.com/jumasseberi/"
          aria-label="Logo do Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <i id="instagram-logo"></i>
        </a>

        <a
          href="https://www.facebook.com/jumas.seberi/"
          aria-label="Logo do Facebook"
          target="_blank"
          rel="noreferrer"
        >
          <i id="facebook-logo"></i>
        </a>
      </div>

      <Arrow
        width={48}
        height={48}
        text="Nos siga"
        class="relative left-1/2 lg:left-18"
      />
    </div>
  </address>

  <p class="text-jumas-blue font-montserrat text-center col-span-full">
    Hier bin Ich!
  </p>
</section>

<style>
  #instagram-logo,
  #facebook-logo {
    display: inline-block;
    height: 56px;
    width: 56px;
  }

  #instagram-logo {
    background: url("/icons/instagram.svg") no-repeat center center / cover;
  }

  #facebook-logo {
    background: url("/icons/facebook.svg") no-repeat center center / cover;
  }
</style>
