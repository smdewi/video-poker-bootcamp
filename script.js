/** Video Poker */

/** Global variables */
// The maximum number of cards a player can have is 5
const maxCard = 5;

/** This builds all the elements in the poker table */ 
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
  
  // Create a section for where the deal and discard buttons and timer will appear
  const middleTable = document.createElement('div');
  middleTable.classList.add('middle-table');
  pokerTableEl.appendChild(middleTable);

  const dealButton = document.createElement('button');
  dealButton.classList.add('deal-button');
  dealButton.innerText = "Deal";
  middleTable.appendChild(dealButton);

  const discardButton = document.createElement('button');
  discardButton.classList.add('discard-button');
  discardButton.innerText = "Discard";
  middleTable.appendChild(discardButton);

  // Create a section for where the place bet and display message will appear
  const bottomTable = document.createElement('div');
  bottomTable.classList.add('bottom-table');
  pokerTableEl.appendChild(bottomTable);

  // placeBetContainer is further divided into 2 section, left and right
  const placeBetContainer = document.createElement('div');
  placeBetContainer.classList.add('bet-container');
  bottomTable.appendChild(placeBetContainer);
  
  const leftBetContainer = document.createElement('div');
  leftBetContainer.classList.add('left-bet-container');
  placeBetContainer.appendChild(leftBetContainer);

  const rightBetContainer = document.createElement('div');
  rightBetContainer.classList.add('right-bet-container');
  placeBetContainer.appendChild(rightBetContainer);

  const placeBetButton = document.createElement('button');
  placeBetButton.classList.add('bet-button');
  placeBetButton.innerText = "Bet";
  rightBetContainer.appendChild(placeBetButton);

  // Create a container to display how much credit player has
  const creditContainer = document.createElement('div');
  creditContainer.classList.add('credit-container');
  creditContainer.innerText = "Credit left:";
  bottomTable.appendChild(creditContainer);

  // Create a display container to display messages to player
  const displayMsgContainer = document.createElement('div');
  displayMsgContainer.classList.add('display-msg-container');
  displayMsgContainer.innerText = "Let's Play!";
  bottomTable.appendChild(displayMsgContainer);

