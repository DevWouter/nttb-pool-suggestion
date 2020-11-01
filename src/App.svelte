<script lang="ts">
  import { locationStore } from "./routing";
  import ListSuggestions from "./ListSuggestions.svelte";
  import EditSuggestion from "./EditSuggestion.svelte";
  import Link from "./Link.svelte";
  import ExportData from "./ExportData.svelte";

  $: location = $locationStore;
  const SUGGESTION_REGEX = /^suggestion\/(.+)$/;
</script>

<Link href="/">Overview</Link>
<Link href="/export">Export</Link>
<hr>
{#if location == ''}
  <ListSuggestions />
{/if}
{#if SUGGESTION_REGEX.test(location)}
  <EditSuggestion key={SUGGESTION_REGEX.exec(location)[1]} />
{/if}
{#if location == 'export'}
  <ExportData />
{/if}