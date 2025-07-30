<script lang="ts">
  type CTAProps = {
    text: string;
    href: string;
    class?: string;
  };

  let { text, href, class: className }: CTAProps = $props();
</script>

<a
  {href}
  class="rounded-full bg-jumas-yellow text-jumas-blue font-semibold text-3xl flex content-center size-fit px-2 py-3 {className}"
>
  {text}
</a>
