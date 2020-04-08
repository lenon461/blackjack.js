export interface IPlayingCard {
    suit: Suit;
    rank: Rank;

    toString(): string;
}

export enum Rank {
    Ace = "A",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10",
    Jack = "J",
    Queen = "Q",
    King = "K",
    Joker = "JOKER",
}

export enum Suit {
    Clubs = "Clubs",
    Spades = "Spades",
    Diamonds = "Diamonds",
    Hearts = "Hearts",
}
