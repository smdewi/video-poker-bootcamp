/** Video Poker */

/** Global variables */
// The maximum number of cards a player can have is 5
const maxCard = 5;



const initGame = () => {
 
  // Create poker table elements where all game elements will show up
  const pokerTableEl = document.createElement('div');
  pokerTableEl.classList.add('poker-table');
  document.body.appendChild(pokerTableEl);

  // The top half of the poker table element will show the player's cards
  const playerHandEl = document.createElement('div');
  playerHandEl.classList.add('player-hand');
  pokerTableEl.appendChild(playerHandEl);

};

initGame();