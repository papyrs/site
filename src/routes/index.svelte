<script>
  import Newsletter from '../lib/components/Newsletter.svelte';
  import Social from '../lib/components/Social.svelte';
</script>

<main>
  <article>
    <h1>Blog on web3</h1>

    <p>
      A new decentralized way of blogging that lives 100% on chain. Your voice is unstoppable,
      your data are your own.
    </p>

    <Newsletter />
  </article>

  <Social />
</main>

<style lang="scss">
  @use '../lib/themes/mixins/shadow';

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0;
  }

  article {
    @include shadow.strong;

    padding: 2.75rem 1.75rem 1rem;

    width: calc(640px - (2 * 0.75rem));
    max-width: calc(100vw - (2 * 0.75rem));
  }

  h1 {
    font-size: 4rem;
    letter-spacing: -0.036em;
    line-height: 1;

    margin-bottom: 1.45rem;
  }
</style>
