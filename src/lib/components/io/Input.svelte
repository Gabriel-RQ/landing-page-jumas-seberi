<script lang="ts">
  type InputProps = {
    label: string;
    type?: "text" | "email" | "password" | "tel";
  };

  let { label, type = "text" }: InputProps = $props();
</script>

<label class="flex flex-col gap-3 text-xl">
  {label}
  <input
    {type}
    class="bg-glass-dark border-glass-stroke border-1 rounded-lg px-3 py-5 outline-none"
  />
</label>
