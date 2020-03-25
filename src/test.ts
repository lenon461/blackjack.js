import BlackJack from "./blackjack";
import { log } from "console";
const blackjack = new BlackJack({ players: 1 });
blackjack.start();
blackjack.action("hit");
log(blackjack.show());
blackjack.end();
log(blackjack.show());
log(blackjack.log());
