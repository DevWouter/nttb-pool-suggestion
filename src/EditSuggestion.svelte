<script lang="ts">
  import { config } from "./data-suggestions";
  import type { PoolSuggestion } from "./pool-suggestion";
  import { getStatsForSuggestion } from "./suggestion";
  export var key = "";

  var suggestion = config.suggestions.find((x) => x.key === key);

  $: stats = getStatsForSuggestion(suggestion);

  function addPool() {
    suggestion.pools = [
      ...suggestion.pools,
      {
        slots: 3,
        tablesExcl: 1,
        tablesShared: 0,
        duration: 0,
      },
    ];
  }

  function deletePool(pool: PoolSuggestion) {
    suggestion.pools = suggestion.pools.filter((x) => x !== pool);
  }
</script>

<style>
  * {
    font-variant-numeric: tabular-nums;
  }
  input {
    width: 5em;
    text-align: right;
  }

  tfoot td {
    text-align: right;
    padding-right: 2em;
  }
</style>

<h1>Editing {key}</h1>

<table>
  <thead>
    <tr>
      <th />
      <th />
      <th colspan="2">Tables</th>
      <th />
    </tr>
    <tr>
      <th>Pool</th>
      <th>Slots</th>
      <th>Excl.</th>
      <th>Shared</th>
      <th>Duration</th>
    </tr>
  </thead>
  <tbody>
    {#each suggestion.pools as pool, index}
      <tr>
        <th>Pool {index + 1}</th>
        <td><input type="number" bind:value={pool.slots} required /></td>
        <td><input type="number" bind:value={pool.tablesExcl} required /></td>
        <td><input type="number" bind:value={pool.tablesShared} required /></td>
        <td><input type="number" bind:value={pool.duration} required /></td>
        <td>
          {#if index != 0}
            <button on:click={() => deletePool(pool)}>-</button>
          {/if}
        </td>
      </tr>
    {/each}
  </tbody>
  <tfoot>
    <tr>
      <th><button on:click={addPool}>Add Pool</button></th>
    </tr>
    <tr>
      <th />
      <th />
      <th colspan="2">Tables</th>
      <th />
    </tr>
    <tr>
      <th>Pool</th>
      <th>Slots</th>
      <th>Excl.</th>
      <th>Shared</th>
      <th>Duration</th>
    </tr>
    <tr>
      <th>Max</th>
      <td>{stats.maxSlots}</td>
      <td>{stats.maxTablesExcl}</td>
      <td>{stats.maxTablesShared}</td>
      <td>{stats.maxDuration}</td>
    </tr>
    <tr>
      <th>Min</th>
      <td>{stats.minSlots}</td>
      <td>{stats.minTablesExcl}</td>
      <td>{stats.minTablesShared}</td>
      <td>{stats.minDuration}</td>
    </tr>
    <tr>
      <th>Diff</th>
      <td>{stats.maxSlots - stats.minSlots}</td>
      <td>{stats.maxTablesExcl - stats.minTablesExcl}</td>
      <td>{stats.maxTablesShared - stats.minTablesShared}</td>
      <td>{stats.maxDuration - stats.minDuration}</td>
    </tr>
    <tr>
      <th>Total</th>
      <td>{stats.totalSlots}</td>
      <td>{stats.totalTablesExcl}</td>
      <td>{stats.totalTablesShared}</td>
    </tr>
  </tfoot>
</table>

<pre>{JSON.stringify(suggestion, undefined, 2)}</pre>
