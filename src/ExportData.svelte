<script lang="ts">
  import { config } from "./data-suggestions";
  var ctrl: HTMLTextAreaElement;

  function selectAll() {
    ctrl.select();
  }

  let lines = [];

  lines.push('import type { Suggestion } from "./suggestion";');
  lines.push("");
  lines.push("export const config: { suggestions: Suggestion[] } = ");
</script>

<style>
  textarea {
    width: 100%;
    height: calc(100vh - 80px);
    font-family: "Consolas", monospace;
    font-size: 10pt;
  }
</style>

<textarea
  readonly
  on:click={selectAll}
  bind:this={ctrl}>{lines.join('\n')}{JSON.stringify(config, undefined, 2)}{';'}</textarea>
