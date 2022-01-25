/** Video Poker */

/** Global variables */
// The maximum number of cards a player can have is 5
const maxCard = 5;

// Player starts with $100 credit
let credit = 100;

// Deck store the deck of shuffled deck of cards for game play
let deck = [];

// playerHand and keptHand are initialized as an empty array at the beginning
let playerHand = [];
let keptHand = [];
let sortedCards = [];

// the handScore is initialized as 0
let handScore = 0;

/** Poker Hand Rank Scoring Guide */
// Royal Flush = 250
// Straight Flush = 50
// Four of a kind = 25
// Full House = 9
// Flush = 6
// Straight = 4
// Three of a kind = 3
// Two Pairs = 2
// Pair Jack or better = 1

/************************************************************************** */
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
  
  // Create a section for where the deal and discard buttons will appear
  const middleTable = document.createElement('div');
  middleTable.classList.add('middle-table');
  pokerTableEl.appendChild(middleTable);

  // Create deal button
  const dealButton = document.createElement('button');
  dealButton.classList.add('deal-button');
  dealButton.innerText = "Deal";
  middleTable.appendChild(dealButton);

  // Create discard button
  const discardButton = document.createElement('button');
  discardButton.classList.add('discard-button');
  discardButton.innerText = "Discard";
  middleTable.appendChild(discardButton);

  // Create a bottomTable section for player's credit and display message will appear
  const bottomTable = document.createElement('div');
  bottomTable.classList.add('bottom-table');
  pokerTableEl.appendChild(bottomTable);

  // Create a tutorial button
  const tutorialButton = document.createElement('button');
  tutorialButton.classList.add('tutorial-button');
  tutorialButton.innerText = "Tutorial";
  bottomTable.appendChild(tutorialButton);

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

// Helper funtion to calculateHand score



// This function returns handScore
const calcHandScore = (hand) => {
  //Initialize value
  let isStraightFlush = false;
  let isFourOfKind = false;
  let isFullHouse = false;
  let isFlush = false; 
  let isStraight = false;
  let isThreeOfKind = false;
  let isTwoPair = false;
  let isPair = false;
  let isPairJQKA = false;
  
  //Check for straight
  //Sort card array in ascending order
  sortedCards = hand.sort((a,b) => {
    return a.rank - b.rank;
  });
  console.log(sortedCards);

  let diff = 0;
  for (let i = 0; i < 4; i += 1){
    // diff += (sortedCards[i+1].rank-sortedCards[i].rank);
    // console.log(diff);

    //check if the difference between current card and next card = 1
    if ((sortedCards[i+1].rank - sortedCards[i].rank) === 1) {
      diff += 1;
    }

  }
  // If all 5 cards are in sequence, diff should sum up to 4
  if (diff === 4) {
    isStraight = true;
  }

  //Check for flush
  let isHeartFlush = hand.every((hand) => {
    return (hand.suit === 'hearts');
  });
  let isDiamondFlush = hand.every((hand) => {
    return (hand.suit === 'diamonds');
  });
  let isClubFlush = hand.every((hand) => {
    return (hand.suit === 'clubs');
  });
  let isSpadeFlush = hand.every((hand) => {
    return (hand.suit === 'spades');
  });

  // Hand is a flush when all the cards in hand array is of the same suit
  if (isHeartFlush || isDiamondFlush || isClubFlush || isSpadeFlush) {
    isFlush = true;
  }

  // Check how many pairs are in the hand
  // create an object with name of card as key and the cardNameTally as the value
  const cardNameTally = {};

  //initialize
  let countPair = 0;
  let cardName;
  let faceCard;

  // Go over the hand and count how many times a card appear
  for (let i=0; i < hand.length; i +=1) {
  cardName = hand[i].name;
  console.log(cardName);
  if (cardName in cardNameTally) {
    cardNameTally[cardName] +=1;
  }
  else {
    cardNameTally[cardName] = 1;
    }
  }

  for (cardName in cardNameTally) {
  console.log(`There are ${cardNameTally[cardName]} ${cardName}s in the hand`);
  if (cardNameTally[cardName] === 4) {
    console.log(`4 of a kind`);
    isFourOfKind = true;
  }
  if (cardNameTally[cardName] === 3) {
    console.log(`3 of a kind`);
    isThreeOfKind = true;
  }
  if (cardNameTally[cardName] === 2) {
    console.log(`Pair`);
    isPair = true;
    countPair += 1;
    if (cardName === 'J'|| cardName === 'Q' || cardName === 'K' || cardName === 'A') {
      isPairJQKA = true;
      faceCard = cardName;
    }
    
  }
}


  // Straight Flush
  if (isStraight && isFlush) {
    isStraightFlush = true;
    handScore = 50;
    displayMsgContainer.innerText = "You've got a Straight Flush!";
  }
  else if (isFourOfKind) {
    handScore = 25;
    displayMsgContainer.innerText = "You've got a Four of a Kind!";
  }
  else if (isThreeOfKind && isPair) {
    isFullHouse = true;
    handScore = 9;
    displayMsgContainer.innerText = "You've got a Full House!";
  }
  else if (isFlush) {
    handScore = 6;
    displayMsgContainer.innerText = "You've got a Flush!";
  }
  else if (isStraight) {
    handScore = 4;
    displayMsgContainer.innerText = "You've got a straight!";
  }
  else if (isThreeOfKind) {
    handScore = 3;
    displayMsgContainer.innerText = "You've got a Three of a Kind!";
  }
  else if (isPair && countPair === 2) {
    isTwoPair = true;
    handScore = 2;
    displayMsgContainer.innerText = "You've got 2 Pairs!";
  }
  else if (isPair && isPairJQKA) {
    handScore = 1;
    displayMsgContainer.innerText = `You've got a Pair of ${faceCard}`;
  }
  else {
    handScore = -10;
    displayMsgContainer.innerText = `Sorry, you lose! Better luck next time`;
  }

  return handScore; // what calcHand returns

};

/** This is the Start of the Game */
const initGame = () => {
  
  // Deal and display cards when the deal button is hit
  dealButton.addEventListener('click',(event) => {

    // Create a deck of card and shuffle it
    deck = shuffleCards(makeDeck());
    
    // Deal 5 cards to player
    dealCards();
    console.log(playerHand);

    //Initialize/empty out keptHand
    keptHand = [];
    
    // Show player's hand - 5 cards
    displayCards(playerHand);

    displayMsgContainer.innerText = "Click the cards you want to keep. Then click Discard.";
  });

  // Discard and draw more cards
  discardButton.addEventListener('click', (event) => {
    
    // Draw new cards and push them into keptHand array
    let numOfDraw = maxCard - keptHand.length;
    for (let i = 0; i < numOfDraw; i += 1) {
      keptHand.push(deck.pop());
    }

    // Display the keptHand array, this is what will be used for calculating hand score
    displayCards(keptHand);

    // Pass the keptHand array into the calcHandScore and store the value in handScore
    handScore = calcHandScore(keptHand);

    // Show and update credit based on handScore
    credit = credit + handScore;
    creditContainer.innerText = `Credit: $ ${credit}`;

  });

  // Tutorial mode will show a fixed hand
  // Using the testHand from testHandscript.js the tutorial will loop through
  // and display the cards from testHand
  for (let i = 0; i < testHand.length; i += 1){
    tutorialButton.addEventListener('click', (event) => {
    
      let k = i;
      setTimeout(function(){
        displayCards(testHand[i]);
        handScore = calcHandScore(testHand[i]);
      }, 5000*(k+1));
            
    });
  }
  
  
    
} // end of initGame()

initGame();

