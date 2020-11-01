<script lang="ts">
  import { locationStore } from "./routing";
  import ListSuggestions from "./ListSuggestions.svelte";
  import EditSuggestion from "./EditSuggestion.svelte";
  import Link from "./Link.svelte";
  import ExportData from "./ExportData.svelte";

  $: location = $locationStore;
  const SUGGESTION_REGEX = /^suggestion\/(.+)$/;
</script>

<style>
  .seperator {
    padding-left: 8px;
    padding-right: 8px;
  }
</style>

<div class="header">
  <Link href="/">Overview</Link>
  <span class="seperator">|</span>
  <Link href="/export">Export</Link>
</div>
<hr />
{#if location == ''}
  <ListSuggestions />
{/if}
{#if SUGGESTION_REGEX.test(location)}
  <EditSuggestion key={SUGGESTION_REGEX.exec(location)[1]} />
{/if}
{#if location == 'export'}
  <ExportData />
{/if}
