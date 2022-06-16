<script>
  import Social from '../lib/components/Social.svelte';
</script>

<main>
  <article>
    <h1><span>Blog on web3</span><span>&nbsp;with Papyrs</span></h1>

    <p>
      An open-source, privacy-first, decentralized blogging platform that lives 100% on chain. Your
      voice is unstoppable, your data are your own.
    </p>
  </article>

  <a href="https://app.papy.rs" rel="external noopener norefferer">Write post</a>
</main>

<Social />

<style lang="scss">
  @use '../lib/themes/mixins/shadow';
  @use '../lib/themes/mixins/button';

  :global(body > div) {
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0;
  }

  article {
    padding: 0 1.75rem 1rem;

    width: calc(640px - (2 * 0.75rem));
    max-width: calc(100vw - (2 * 0.75rem));
  }

  h1 {
    font-size: 4rem;
    letter-spacing: -0.036em;
    line-height: 0.2;

    margin-bottom: 1.45rem;

    span:first-of-type {
      line-height: 1;
    }

    span:last-of-type {
      font-size: initial;
      letter-spacing: -0.036em;
    }
  }

  a {
    @include button.primary;

    padding: 0.45rem 1rem;
  }

  p {
    margin-bottom: 0;
  }
</style>
