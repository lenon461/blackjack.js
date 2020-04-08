"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CardDeck {
    constructor() {
        this.cards = this.default_deck();
        this.shuffle();
    }
    default_deck() {
        const suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
        const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
        const default_deck = [];
        for (var suit of suits) {
            for (var rank of ranks) {
                const card = {
                    suit,
                    rank,
                };
                default_deck.push(card);
            }
        }
        return default_deck;
    }
    shuffle() {
        this.cards.sort(() => Math.random() - Math.random());
    }
    draw() {
        const card = this.cards.pop();
        if (!card)
            throw new Error("Deck is empty");
        else
            return card;
    }
}
exports.default = CardDeck;
