<script lang="ts">
  import { config } from "./data-suggestions";
  import Link from "./Link.svelte";
  import type { Suggestion } from "./suggestion";

  var newName = "";
  function deleteSuggestion(suggestion: Suggestion) {
    config.suggestions = config.suggestions.filter((x) => x !== suggestion);
  }

  function createNewSuggestion() {
    newName = (newName || "").trim();
    if(newName == ''){
      alert('The new key is empty, please give it a name');
      return;
    }
    if (config.suggestions.some((x) => x.key == newName)) {
      alert("Key is already in use, please use another key");
      return;
    }

    config.suggestions = [
      ...config.suggestions,
      {
        key: newName,
        pools: [{ slots: 3, tablesExcl: 1, tablesShared: 0, duration: 90 }],
      },
    ];
  }
</script>

<h1>Suggestions</h1>
<ul>
  {#each config.suggestions as suggestion}
    <li>
      <Link href={'/suggestion/' + suggestion.key.toString()}>
        {suggestion.key}
      </Link>
      &mdash;
      <button
        class="small-button"
        on:click={() => deleteSuggestion(suggestion)}>Delete</button>
    </li>
  {/each}
  <li>
    <input placeholder="Key name" bind:value={newName} />
    <button class="small-button" on:click={() => createNewSuggestion()}>New
      suggestion</button>
  </li>
</ul>
