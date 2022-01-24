/** Video Poker */

/** Global variables */
// The maximum number of cards a player can have is 5
const maxCard = 5;

// Player starts with $100 credit
let credit = 100;

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
    let cardEl = document.createElement('div');
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

  // Create a bottomTable section for where the place bet, player's credit and display message will appear
  const bottomTable = document.createElement('div');
  bottomTable.classList.add('bottom-table');
  pokerTableEl.appendChild(bottomTable);

  // placeBetContainer 
  // const placeBetContainer = document.createElement('div');
  // placeBetContainer.classList.add('bet-container');
  // bottomTable.appendChild(placeBetContainer);
  
  // const placeBetButton = document.createElement('button');
  // placeBetButton.classList.add('bet-button');
  // placeBetButton.innerText = "Bet";
  // placeBetContainer.appendChild(placeBetButton);

  // Create a container to display how much credit player has
  const creditContainer = document.createElement('div');
  creditContainer.classList.add('credit-container');
  creditContainer.innerText = `Credit: $ ${credit}`;
  bottomTable.appendChild(creditContainer);

  // Create a display container to display messages to player
  const displayMsgContainer = document.createElement('div');
  displayMsgContainer.classList.add('display-msg-container');
  displayMsgContainer.innerText = "Let's Play!";
  bottomTable.appendChild(displayMsgContainer);

// ********************************************************************

/** Create a deck of cards */
const makeDeck = () => {
  // Initialize an empty deck array
  const newDeck = [];

  // There are 4 suits: ♥ ♦ ♣ ♠
  const suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  // Create the deck by looping over the suits array
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex += 1) {
    
    // Store the current suit in a variable as the loop continue
    const currentSuit = suits[suitIndex];

    // Initialize variable suitSymbol
    let currentSymbol;

    // Assign suitSymbol to match current suit
    if (currentSuit === 'hearts') {
      currentSymbol = '♥️';
    }
    else if (currentSuit === 'diamonds') {
      currentSymbol = '♦️';
    }
    else if (currentSuit === 'clubs') {
      currentSymbol = '♣️';
    }
    else {
      currentSymbol = '♠️';
    }

    // If suits is either ❤ or ♦, assign cardColor to be red
    // This is used for card display
    let cardColor;
    if (currentSymbol === '♥️' || currentSymbol === '♦️') {
      cardColor = 'red';  
    }
    else {
      cardColor = 'black';
    }

    // Loop from 1 - 13 to create all cards for each suit
    for (let rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      let cardName = `${rankCounter}`;

      // If rank is 1, 11, 12 or 13, set cardName to A, J, Q, K
      if (cardName === '1') {
        cardName = 'A';
      }
      else if (cardName === '11') {
        cardName = 'J';
      }
      else if (cardName === '12') {
        cardName = 'Q';
      }
      else if (cardName === '13') { 
        cardName = 'K';
      }

      // Create an object of a new card with the current name, suit, rank, and color for display
      const cardInfo = {
        name: cardName,
        suit: currentSuit,
        suitSymbol: currentSymbol,
        rank: rankCounter,
        color: cardColor,
      };

      // Add the new card to the newDeck
      newDeck.push(cardInfo);
    }

  }

  return newDeck;
};

/** Shuffle the deck of cards */
// Get a random index ranging from 0 (inclusive) to max (exclusive).
const getRandomIndex = (max) => Math.floor(Math.random() * max + 1);

// Shuffle an array of cards
const shuffleCards = (cards) => {
  // Loop over the card deck array once
  for (let currentIndex = 0; currentIndex < cards.length; currentIndex += 1) {
    // Select a random index in the deck
    const randomIndex = getRandomIndex(cards.length);
    // Select the card that corresponds to randomIndex
    const randomCard = cards[randomIndex];
    // Select the card that corresponds to currentIndex
    const currentCard = cards[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cards[currentIndex] = randomCard;
    cards[randomIndex] = currentCard;
  }
  // Return the shuffled deck
  return cards;
};


// Global variables
const deck = shuffleCards(makeDeck());
let playerHand = [];
let keptHand = [];

// Display cards
const displayCards = (cardInfo) => {
  playerHandEl.innerHTML = "";

  for (let i = 0; i < cardInfo.length; i += 1) {
    let cardEl = document.createElement('div');
    cardEl.classList.add('card');

    const suit = document.createElement('div');
    suit.classList.add('suit',cardInfo[i].color);
    suit.innerText = cardInfo[i].suitSymbol; 

    const name = document.createElement('div');
    name.classList.add(cardInfo[i].name, cardInfo[i].color);
    name.innerText = cardInfo[i].name;

    playerHandEl.appendChild(cardEl);
    cardEl.appendChild(name);
    cardEl.appendChild(suit);

    cardEl.addEventListener('click', (event) => {
      console.log(`clicked ${i}`);

      // Store clicked cards in keptHand array
      keptHand.push(cardInfo[i]);

    })

  }
  
  
};

// Helper function to deal cards
const dealCards = () => {
  // Take 5 cards from the top of the deck and assign to player
  playerHand = deck.slice(0,5);

  return playerHand;
};

// const cardClicked = () => {
//   console.log(`card clicked`);
// };

const initGame = () => {
  
  // Deal and display cards when the deal button is hit
  dealButton.addEventListener('click',(event) => {
    // console.log(dealButton);
    dealCards();
    console.log(playerHand);
    
    // Show player's hand - 5 cards
    displayCards(playerHand);

    displayMsgContainer.innerText = "Click the cards you want to keep. Then click Discard.";
  });

  // Discard and draw more cards
  discardButton.addEventListener('click', (event) => {
    let numOfDraw = maxCard - keptHand.length;
    for (let i = 0; i < numOfDraw; i += 1) {
      keptHand.push(deck.pop());
    }

    displayCards(keptHand);
  });
  
  // Calculate hand
  

  // Show score

  return; 
}

initGame();

