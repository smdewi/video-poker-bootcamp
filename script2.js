/** Create a deck of cards */
const makeDeck = () => {
  // Initialize an empty deck array
  const newDeck = [];

  // There are 4 suits: ❤ ♦ ♣ ♠
  const suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  // Create the deck by looping over the suits array
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex += 1) {
    
    // Store the current suit in a variable as the loop continue
    const currentSuit = suits[suitIndex];

    // Initialize variable suitSymbol
    let currentSymbol;

    // Assign suitSymbol to match current suit
    if (currentSuit === 'hearts') {
      currentSymbol = '❤';
    }
    else if (currentSuit === 'diamonds') {
      currentSymbol = '♦';
    }
    else if (currentSuit === 'clubs') {
      currentSymbol = '♣';
    }
    else {
      currentSymbol = '♠';
    }

    // If suits is either ❤ or ♦, assign cardColor to be red
    // This is used for card display
    let cardColor;
    if (currentSymbol === '❤' || currentSymbol === '♦') {
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
        suit: currentSymbol,
        rank: rankCounter,
        color: cardColor,
      };

      // Add the new card to the newDeck
      newDeck.push(cardInfo);
    }

  }

  return newDeck;
};

const initGame = () => {
  const deck = makeDeck();
  let playerCard1 = deck.pop();
  let card1 = playerCard1.name;
  return card1; 
}

initGame();