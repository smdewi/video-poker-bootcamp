// Store player's hand in an array
const straightFlushHand = [
  {name: '3', suit: 'hearts', suitSymbol: '❤', rank: 3, color: 'red',},
  {name: '2', suit: 'hearts', suitSymbol: '❤', rank: 2, color: 'red',},
  {name: '5', suit: 'hearts', suitSymbol: '❤', rank: 5, color: 'red',},
  {name: '4', suit: 'hearts', suitSymbol: '❤', rank: 4, color: 'red',},
  {name: 'A', suit: 'hearts', suitSymbol: '❤', rank: 1, color: 'red',},
];

const fourOfKindHand = [
  {name: '6', suit: 'hearts', suitSymbol: '❤', rank: 6, color: 'red',},
  {name: '6', suit: 'diamonds', suitSymbol: '♦', rank: 6, color: 'red',},
  {name: '6', suit: 'clubs', suitSymbol: '♣', rank: 6, color: 'black',},
  {name: '6', suit: 'spades', suitSymbol: '♠', rank: 6, color: 'black',},
  {name: 'A', suit: 'hearts', suitSymbol: '❤', rank: 1, color: 'red',},
];

const fullHouseHand = [
  {name: '6', suit: 'hearts', suitSymbol: '❤', rank: 6, color: 'red',},
  {name: '6', suit: 'diamonds', suitSymbol: '♦', rank: 6, color: 'red',},
  {name: '6', suit: 'clubs', suitSymbol: '♣', rank: 6, color: 'black',},
  {name: 'A', suit: 'spades', suitSymbol: '♠', rank: 1, color: 'black',},
  {name: 'A', suit: 'hearts', suitSymbol: '❤', rank: 1, color: 'red',},
];

const flushHand = [
  {name: '6', suit: 'hearts', suitSymbol: '❤', rank: 6, color: 'red',},
  {name: '2', suit: 'hearts', suitSymbol: '❤', rank: 2, color: 'red',},
  {name: '8', suit: 'hearts', suitSymbol: '❤', rank: 8, color: 'red',},
  {name: 'Q', suit: 'hearts', suitSymbol: '❤', rank: 12, color: 'red',},
  {name: 'A', suit: 'hearts', suitSymbol: '❤', rank: 1, color: 'red',},
];

const straightHand = [
  {name: '3', suit: 'hearts', suitSymbol: '❤', rank: 3, color: 'red',},
  {name: '2', suit: 'diamonds', suitSymbol: '♦', rank: 2, color: 'red',},
  {name: '5', suit: 'clubs', suitSymbol: '♣', rank: 5, color: 'black',},
  {name: '4', suit: 'spades', suitSymbol: '♠', rank: 4, color: 'black',},
  {name: 'A', suit: 'hearts', suitSymbol: '❤', rank: 1, color: 'red',},
];

const threeOfKindHand = [
  {name: '6', suit: 'hearts', suitSymbol: '❤', rank: 6, color: 'red',},
  {name: '6', suit: 'diamonds', suitSymbol: '♦', rank: 6, color: 'red',},
  {name: '6', suit: 'clubs', suitSymbol: '♣', rank: 6, color: 'black',},
  {name: 'Q', suit: 'spades', suitSymbol: '♠', rank: 12, color: 'black',},
  {name: 'A', suit: 'hearts', suitSymbol: '❤', rank: 1, color: 'red',},
];

const twoPairHand = [
  {name: '6', suit: 'hearts', suitSymbol: '❤', rank: 6, color: 'red',},
  {name: '6', suit: 'diamonds', suitSymbol: '♦', rank: 6, color: 'red',},
  {name: '7', suit: 'clubs', suitSymbol: '♣', rank: 7, color: 'black',},
  {name: 'A', suit: 'spades', suitSymbol: '♠', rank: 1, color: 'black',},
  {name: 'A', suit: 'hearts', suitSymbol: '❤', rank: 1, color: 'red',},
];

const pairJQKAHand = [
  {name: '6', suit: 'hearts', suitSymbol: '❤', rank: 6, color: 'red',},
  {name: '8', suit: 'diamonds', suitSymbol: '♦', rank: 8, color: 'red',},
  {name: '7', suit: 'clubs', suitSymbol: '♣', rank: 7, color: 'black',},
  {name: 'A', suit: 'spades', suitSymbol: '♠', rank: 1, color: 'black',},
  {name: 'A', suit: 'hearts', suitSymbol: '❤', rank: 1, color: 'red',},
];

const loseHand = [
  {name: '6', suit: 'hearts', suitSymbol: '❤', rank: 6, color: 'red',},
  {name: '8', suit: 'diamonds', suitSymbol: '♦', rank: 8, color: 'red',},
  {name: '7', suit: 'clubs', suitSymbol: '♣', rank: 7, color: 'black',},
  {name: '10', suit: 'spades', suitSymbol: '♠', rank: 10, color: 'black',},
  {name: 'A', suit: 'hearts', suitSymbol: '❤', rank: 1, color: 'red',},
];