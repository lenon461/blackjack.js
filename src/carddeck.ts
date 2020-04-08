export default class CardDeck {
    cards: Card[];

    constructor() {
        this.cards = this.default_deck();
        this.shuffle();
    }

    default_deck() {
        const suits: Suits[] = ["Spades", "Diamonds", "Clubs", "Hearts"];
        const ranks: Ranks[] = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
        const default_deck = [];
        for (var suit of suits) {
            for (var rank of ranks) {
                const card: Card = {
                    suit,
                    rank,
                };
                default_deck.push(card);
            }
        }
        return default_deck;
    }
    shuffle(): void {
        this.cards.sort(() => Math.random() - Math.random());
    }
    draw(): Card {
        const card = this.cards.pop();
        if (!card) throw new Error("Deck is empty");
        else return card;
    }
}

export interface Card {
    suit: Suits;
    rank: Ranks;
}

type Suits = "Spades" | "Diamonds" | "Clubs" | "Hearts";
type Ranks = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "T" | "J" | "Q" | "K" | "A";
