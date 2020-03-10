# blackjack.js

blackjack.js is a Javascript blackjack library that is used for playing blackjack

# Installation

To install the stable version:

```
# NPM
npm install blackjack.js
```

# Example Code 

The code blow plays a blackjack 1 vs 1

```

```

# API

## Constructor: BlackJack({options})

options
|Name|Type|Description|
|--|--|--|
|no-bet|boolean|not used yet|
|players|number|How many players in the game (default : 1)|


```
// 1 vs 1 blackjack defaults when called with no parameters
const blackjack = new BlackJack();

// pass options
const blackjack = new BlackJack({ players: 2 });
```

## start()
The dealer deals two cards to everyone, including himself


```
const blackjack = new BlackJack();
blackjack.start();
```

## show()
Returns a string card situation that everyone holds  
The dealer`s card is opened when the game is ends

```
const blackjack = new BlackJack();
blackjack.start();
blackjack.show()

// +------------------------+
// |        Dealer-X        |
// |                        |
// |         1. **          |
// |         2. HK          |
// |                        |
// |         < ?? >         |
// +------------------------+
// +------------------------+
// |        Player-0        |
// |                        |
// |         1. D9          |
// |         2. CA          |
// |                        |
// |         < 19 >         |
// +------------------------+

const blackjack = new BlackJack();
blackjack.start();
blackjack.end();
blackjack.show()

// +------------------------+
// |        Dealer-X        |
// |                        |
// |         1. CQ          |
// |         2. HK          |
// |                        |
// |         < 20 >         |
// +------------------------+
// +------------------------+
// |        Player-0        |
// |                        |
// |         1. D9          |
// |         2. CA          |
// |                        |
// |         < 19 >         |
// +------------------------+
```
## action(action)
The dealer deals two cards to everyone, including himself

parameter
|Name|Type|Description|
|----|--|--|
|Hit|String|get one more card|
|Stand|String|stop and the turn goes to the next person|
```
const blackjack = new BlackJack();
blackjack.start();

// player 0 turn
blackjack.action("Hit");
blackjack.action("Hit");
blackjack.action("Stand");

// player 1 turn
blackjack.action("Hit");
blackjack.action("Stand");

blackjack.show();

// +------------------------+
// |        Dealer-X        |
// |                        |
// |         1. **          |
// |         2. HK          |
// |                        |
// |       < Dealer >       |
// +------------------------+
// +------------------------+
// |        Player-0        |
// |                        |
// |         1. D9          |
// |         2. CA          |
// |         3. CK          |
// |         4. SK          |
// |                        |
// |       < player >       |
// +------------------------+
// +------------------------+
// |        Player-1        |
// |                        |
// |         1. D7          |
// |         2. H3          |
// |         3. DT          |
// |                        |
// |       < player >       |
// +------------------------+
```


## end()
The dealer takes action according to the dealer's rules.
* dealers_rule :   
The dealer must get one extra card if the sum of cards is 16 or less, and stop if it is 17 or more.

```
const blackjack = new BlackJack();
blackjack.start();
blackjack.end(); 
blackjack.show();
// +------------------------+
// |        Dealer-X        |
// |                        |
// |         1. H5          |
// |         2. ST          |
// |         3. HJ          |
// |                        |
// |         < 25 >         |
// +------------------------+
// +------------------------+
// |        Player-0        |
// |                        |
// |         1. H9          |
// |         2. DK          |
// |                        |
// |         < 19 >         |
// +------------------------+
```