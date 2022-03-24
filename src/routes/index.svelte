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

    width: calc(640px - (2 * 0.75rem));
    max-width: calc(100vw - (2 * 0.75rem));
  }

  h1 {
    font-size: 4rem;
    letter-spacing: -0.036em;
    line-height: 0.75;

    background-image: linear-gradient(120deg, var(--color-primary-opaque) 25%, var(--site-background) 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.75rem;
    background-position: 0 100%;
    transition: background-size 0.25s ease-in;

    margin-bottom: 1.25rem;
  }
</style>
