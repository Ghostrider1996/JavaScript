function tseamAccount(input) {
  let accountGames = input.shift().split(" ");

  while (input[0] !== "Play!") {
    let [command, game] = input.shift().split(" ");

    if (command === "Install" && !accountGames.includes(game)) {
      accountGames.push(game);
    } else if (command === "Uninstall" && accountGames.includes(game)) {
      accountGames = accountGames.filter((g) => g !== game);
    } else if (command === "Update" && accountGames.includes(game)) {
      accountGames = accountGames.filter((g) => g !== game);
      accountGames.push(game);
    } else if (command === "Expansion" && accountGames.includes(game)) {
      let [gameName, expansion] = game.split("-");
      let expandedGame = `${gameName}:${expansion}`;
      let gameIndex = accountGames.indexOf(gameName);

      if (gameIndex !== -1) {
        accountGames.splice(gameIndex + 1, 0, expandedGame);
      }
    }
  }

  console.log(accountGames.join(" "));
}
tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
