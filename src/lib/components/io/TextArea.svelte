<script lang="ts">
  type TextAreaProps = {
    label: string;
  };

  let { label }: TextAreaProps = $props();
</script>

<label class="flex flex-col gap-3 text-xl">
  {label}
  <textarea
    class="bg-glass-dark border-glass-stroke border-1 rounded-lg px-3 py-4 h-48 outline-none resize-none"
  ></textarea>
</label>
