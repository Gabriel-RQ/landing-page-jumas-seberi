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
  class="rounded-full bg-jumas-yellow text-jumas-blue font-semibold text-2xl md:text-3xl inline-block text-center size-fit px-2 md:px-12 md:py-6 py-3 shadow {className}"
>
  {text}
</a>
