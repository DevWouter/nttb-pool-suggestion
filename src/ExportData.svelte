<script style="ts">
  import { config } from "./data-suggestions";

  $: data = config.suggestions;
</script>

<textarea>import type &lbrace; Suggestion &rbrace; from "./suggestion"; export
  const suggestions: Suggestion[] =
  {JSON.stringify(data, undefined, 2)}</textarea>
