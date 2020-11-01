import type { Suggestion } from "./suggestion";

export const config: { suggestions: Suggestion[] } = {
  "suggestions": [
    {
      "key": "8 players - 2 pools",
      "pools": [
        {
          "slots": 4,
          "tablesExcl": 1,
          "tablesShared": 0,
          "duration": 90
        },
        {
          "slots": 4,
          "tablesExcl": 1,
          "tablesShared": 0,
          "duration": 90
        }
      ]
    },
    {
      "key": "9 players - 2",
      "pools": [
        {
          "slots": 4,
          "tablesExcl": 1,
          "tablesShared": 0,
          "duration": 90
        },
        {
          "slots": 5,
          "tablesExcl": 1,
          "tablesShared": 0,
          "duration": 150
        }
      ]
    }
  ]
};