<script style="ts">
  import { config } from "./data-suggestions";

  let lines = [];

  lines.push('import type { Suggestion } from "./suggestion";');
  lines.push("");
  lines.push("export const config: { suggestions: Suggestion[] } = ");
</script>

<textarea>{lines.join('\n')}{JSON.stringify(config, undefined, 2)}{';'}</textarea>
