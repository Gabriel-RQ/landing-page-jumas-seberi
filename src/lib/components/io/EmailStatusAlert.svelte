<script lang="ts">
  import { AlertTriangleIcon, CheckIcon } from "@lucide/svelte";
  import { scale } from "svelte/transition";

  type EmailStatusAlertProps = {
    success: boolean;
    show: boolean;
  };

  let { success, show }: EmailStatusAlertProps = $props();
</script>

{#if show}
  <span
    class="font-medium px-2 py-4 w-full inline-flex justify-center items-center gap-4 rounded-lg {success
      ? 'bg-jumas-green'
      : 'bg-jumas-red'}"
    transition:scale
    class:text-green-50={success}
    class:text-red-50={!success}
  >
    {#if success}
      <CheckIcon class="size-9 stroke-current" />
    {:else}
      <AlertTriangleIcon class="size-9 stroke-current" />
    {/if}
    {success ? "Mensagem enviada com sucesso!" : "Erro ao enviar mensagem"}
  </span>
{/if}
