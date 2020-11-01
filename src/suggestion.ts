import type { PoolSuggestion } from "./pool-suggestion";

export interface Suggestion {
  key: string;
  pools: PoolSuggestion[];
}

export function getStatsForSuggestion(suggestion: Suggestion) {
  if(!suggestion) return {};
  return {
    totalSlots: suggestion.pools
      .map((x) => x.slots)
      .reduce((pv, cv) => pv + cv),
    totalTablesExcl: suggestion.pools
      .map((x) => x.tablesExcl)
      .reduce((pv, cv) => pv + cv),
    totalTablesShared: suggestion.pools
      .map((x) => x.tablesShared)
      .reduce((pv, cv) => pv + cv),

    maxSlots: suggestion.pools
      .map((x) => x.slots)
      .reduce((pv, cv) => Math.max(pv, cv)),
    maxTablesExcl: suggestion.pools
      .map((x) => x.tablesExcl)
      .reduce((pv, cv) => Math.max(pv, cv)),
    maxTablesShared: suggestion.pools
      .map((x) => x.tablesShared)
      .reduce((pv, cv) => Math.max(pv, cv)),
    maxDuration: suggestion.pools
      .map((x) => x.duration)
      .reduce((pv, cv) => Math.max(pv, cv)),

    minSlots: suggestion.pools
      .map((x) => x.slots)
      .reduce((pv, cv) => Math.min(pv, cv)),
    minTablesExcl: suggestion.pools
      .map((x) => x.tablesExcl)
      .reduce((pv, cv) => Math.min(pv, cv)),
    minTablesShared: suggestion.pools
      .map((x) => x.tablesShared)
      .reduce((pv, cv) => Math.min(pv, cv)),
    minDuration: suggestion.pools
      .map((x) => x.duration)
      .reduce((pv, cv) => Math.min(pv, cv)),
  };
}