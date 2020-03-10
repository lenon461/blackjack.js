import BlackJack from "./blackjack";

const blackjack = new BlackJack({ players: 1 });
blackjack.start();
blackjack.action("stand");
blackjack.end();
blackjack.show();
