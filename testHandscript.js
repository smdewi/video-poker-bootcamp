// Store player's hand in an array
const testPlayerHand = [
  {rank: 2, suit: '❤', name: '2'},
  {rank: 3, suit: '❤', name: '3'},
  {rank: 4, suit: '❤', name: '4'},
  {rank: 5, suit: '❤', name: '5'},
  {rank: 6, suit: '❤', name: '6'},
];

let isFlush = false;
let playerHandPoints = 0;

const checkForFlush = (playerHand) => {
  let sameSuit = 0;
  // check if playerHand.suit are all the same
  for (let i = 0; i < 4; i += 1){
    if (playerHand[i].suit === playerHand[i+1].suit) {
      sameSuit += 1;
    }
  }
  
  if (sameSuit === 4) {
    isFlush = true;
    playerHandPoints = 20;
  }
  else {
    isFlush = false;
  }

  return isFlush;
};

