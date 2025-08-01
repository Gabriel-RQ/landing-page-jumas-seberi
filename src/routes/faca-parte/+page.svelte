<script lang="ts">
  import { goto } from "$app/navigation";
  import { sendEmail } from "$lib";
  import {
    Button,
    ColorBand,
    EmailStatusAlert,
    Input,
    Logo,
  } from "$lib/components";
  import { ArrowLeftIcon } from "@lucide/svelte";

  let emailStatus = $state({
    show: false,
    success: false,
  });
</script>

<section class="column-system bg-jumas-blue grid-rows-[auto_1fr_auto] relative">
  <ColorBand />
  <span class="col-span-full">
    <Logo />
  </span>

  <div
    class="grid grid-cols-subgrid self-center col-span-full md:col-span-6 md:col-start-2 lg:col-start-4 gap-y-12"
  >
    <button class="row-1 col-1" onclick={() => goto("/")}>
      <ArrowLeftIcon class="size-14" />
    </button>
    <h2
      class="section-title row-1 col-span-3 col-start-2 md:col-span-4 md:col-start-3 lg:col-span-10 lg:col-start-2 lg:text-center"
    >
      Faça parte do Jumas Seberi
    </h2>

    <form
      class="row-2 col-span-full *:w-full space-y-4"
      onsubmit={(e) => sendEmail(e, "subscription", emailStatus)}
    >
      <Input label="Seu nome" name="name" required minlength={3} />
      <Input label="Seu número de telefone" name="phone" type="tel" required />
      <Button variant="yellow" class="mt-4" type="submit"
        >Quero participar</Button
      >

      <EmailStatusAlert {...emailStatus} />
    </form>
  </div>

  <footer class="font-montserrat text-center p-4 absolute bottom-0 inset-x-0">
    <p>&copy; Jumas Seberi 2025</p>
  </footer>
</section>
