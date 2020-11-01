import * as MatchUp from './match-up';

function TestMK(mk: MatchUp.Meerkamp, players: number, skipPauzeCheck: boolean) {
  var allMatches = mk.matches.flatMap(x => x);
  for (var home = 1; home <= players; ++home) {
    for (var away = 1; away <= players; ++away) {
      var homeMatches = allMatches.filter(m => m.home == home && m.away == away);
      var awayMatches = allMatches.filter(m => m.home == away && m.away == home);
      var totalMatches = [...homeMatches, ...awayMatches];

      if (home === away) {
        if (totalMatches.length) {
          throw new Error(`Player ${home} is playing against himself`);
        }

        // Skip the rest of the checks.
        continue;
      }

      if (totalMatches.length != 1) {
        throw new Error(`Player ${home} vs ${away} has ${totalMatches.length} matches while we expect 1 in MK${players}`);
      }
    }
  }

  if (skipPauzeCheck) return;

  var lastPlayers: number[] = [];
  allMatches.forEach(m => {
    if (lastPlayers.includes(m.home)) {
      throw new Error(`Player ${m.home} has played previous match in MK${players}: ${JSON.stringify(m)}`);
    }
    if (lastPlayers.includes(m.away)) {
      throw new Error(`Player ${m.away} has played previous match in MK${players}: ${JSON.stringify(m)}`);
    }

    lastPlayers = [m.home, m.away];
  });

}

// The first three MK can only be played with one player multiple matches in a row.
TestMK(MatchUp.MK3, 3, true);
TestMK(MatchUp.MK4, 4, true);
TestMK(MatchUp.MK5, 5, true);

TestMK(MatchUp.MK6, 6, false);
TestMK(MatchUp.MK7, 7, false);
TestMK(MatchUp.MK8, 8, false);
TestMK(MatchUp.MK9, 9, false);
TestMK(MatchUp.MK10, 10, false);
TestMK(MatchUp.MK11, 11, false);
TestMK(MatchUp.MK12, 12, false);
