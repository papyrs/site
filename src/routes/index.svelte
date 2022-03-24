<script>
  import Newsletter from '../lib/components/Newsletter.svelte';
</script>

<main>
  <article>
    <h1>Blog on web3</h1>

    <p>
      A new decentralized way of blogging that lives entirely on chain. Your voice, your data are
      your own.
    </p>

    <Newsletter />
  </article>
</main>

<style lang="scss">
  @use '../lib/themes/mixins/shadow';

  main {
    position: absolute;
    inset: 0;
  }

  article {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @include shadow.strong;

    padding: 1.75rem;
  }

  h1 {
    font-size: 4rem;
    letter-spacing: -0.036em;
    line-height: 1;
  }
</style>
