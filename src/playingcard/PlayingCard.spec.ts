import test from "ava";
import { PlayingCard } from "./PlayingCard.model";
import { Suit, Rank } from "./PlayingCard.interface";

test("suit and name are set", async (t) => {
    const card = new PlayingCard(Rank.Three, Suit.Diamonds);
    t.deepEqual(card.suit, Suit.Diamonds);
    t.deepEqual(card.rank, Rank.Three);
});

test("toString is equivalent", async (t) => {
    const card = new PlayingCard(Rank.Three, Suit.Diamonds);
    t.deepEqual(card.toString(), `Diamonds 3`);
});
