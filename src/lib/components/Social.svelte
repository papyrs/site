<script lang="ts">
  import {IconTwitter, IconDiscord, IconGitHub} from '@papyrs/ui';
</script>

<footer>
  <a
    aria-label="Papyrs on Twitter"
    href="https://twitter.com/PapyrsApp/"
    rel="external noopener norefferer"><IconTwitter /></a>

  <a
    aria-label="Join the Papyrs server on Discord"
    href="https://discord.gg/EV76WqDuZW"
    rel="external noopener norefferer"><IconDiscord /></a>

  <a
    aria-label="Papyrs in open source - Repo on GitHub"
    href="https://github.com/papyrs/papyrs"
    rel="external noopener norefferer"><IconGitHub /></a>
</footer>

<style lang="scss">
  footer {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -1.75rem);

    display: flex;

    :global {
      svg {
        width: 1.75rem;
        height: 1.75rem;
      }
    }
  }

  a {
    margin: 0 0.25rem;
  }
</style>
