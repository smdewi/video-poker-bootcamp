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

  // Create card element where the player's cards will be shown
  // Use a loop to create 5 card elements
  for (let i = 0; i < maxCard; i += 1) {
    const cardEl = document.createElement('div');
    cardEl.classList.add('cardEl');
    playerHandEl.appendChild(cardEl);
  }
  
  // Create a section for where the deal button and timer will appear
  const middleTable = document.createElement('div');
  middleTable.classList.add('middle-table');
  pokerTableEl.appendChild(middleTable);

  // Create a section for where the place bet and display message will appear
  const bottomTable = document.createElement('div');
  bottomTable.classList.add('bottom-table');
  pokerTableEl.appendChild(bottomTable);

};

initGame();