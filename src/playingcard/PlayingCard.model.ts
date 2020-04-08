import { IPlayingCard, Suit, Rank } from "./PlayingCard.interface";

export class PlayingCard implements IPlayingCard {
    suit: Suit;
    rank: Rank;

    constructor(rank: Rank, suit: Suit) {
        this.suit = suit;
        this.rank = rank;
    }

    public toString(): string {
        return `${this.suit} ${this.rank}`;
    }
}
