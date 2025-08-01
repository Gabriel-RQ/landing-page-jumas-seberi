<script lang="ts">
  import type { HTMLTextareaAttributes } from "svelte/elements";

  type TextAreaProps = {
    label: string;
    name: string;
  } & HTMLTextareaAttributes;

  let { label, name, ...restProps }: TextAreaProps = $props();
</script>

<label class="flex flex-col gap-3 text-xl">
  {label}
  <textarea
    {name}
    {...restProps}
    class="bg-glass-dark border-glass-stroke border-1 rounded-lg px-3 py-4 h-48 outline-none resize-none"
  ></textarea>
</label>
