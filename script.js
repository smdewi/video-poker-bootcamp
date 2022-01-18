/** Video Poker */

/** This function creates the initial landing page */
const buildLandingPage = () => {
  // Create poker table element that will hold all other game elements
  const pokerTableEl = document.createElement('div');
  pokerTableEl.classList.add('poker-table');
  pokerTableEl.innerText = "Welcome to Video Poker";
  document.body.appendChild(pokerTableEl);

  //create start button to start the game
  const startButton = document.createElement('button');
  startButton.classList.add('start-button');
  startButton.innerText = "Start";
  pokerTableEl.appendChild(startButton);
}

const initGame = () => {
  buildLandingPage();

  
};

initGame();