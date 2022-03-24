<script lang="ts">
  import '$lib/themes/font-faces.scss';
  import '$lib/themes/fonts.scss';
  import '$lib/themes/theme.scss';
  import '$lib/themes/main.scss';
  import '$lib/themes/button.scss';
  import '$lib/themes/link.scss';
  import '$lib/themes/input.scss';
  import '$lib/themes/variables.scss';

  import '$lib/themes/site.scss';

  import Seo from '$lib/components/Seo.svelte';
</script>

<svelte:head>
  <Seo />
</svelte:head>

<slot />
