import { IPlayingCard, Rank, Suit } from "../playingcard/PlayingCard.interface";
import { PlayingCard } from "../playingcard/PlayingCard.model";
import { ICardGametype } from "./CardGameType";
import { IPlayer } from "../player/Player.interface";
import { Player } from "../player/Player.model";
export class BlackjackGameType extends ICardGametype {
    public cardsAllowed: IPlayingCard[] = [
        new PlayingCard(Rank.Ace, Suit.Clubs),
        new PlayingCard(Rank.Two, Suit.Clubs),
        new PlayingCard(Rank.Three, Suit.Clubs),
        new PlayingCard(Rank.Four, Suit.Clubs),
        new PlayingCard(Rank.Five, Suit.Clubs),
        new PlayingCard(Rank.Six, Suit.Clubs),
        new PlayingCard(Rank.Seven, Suit.Clubs),
        new PlayingCard(Rank.Eight, Suit.Clubs),
        new PlayingCard(Rank.Nine, Suit.Clubs),
        new PlayingCard(Rank.Ten, Suit.Clubs),
        new PlayingCard(Rank.Jack, Suit.Clubs),
        new PlayingCard(Rank.Queen, Suit.Clubs),
        new PlayingCard(Rank.King, Suit.Clubs),

        new PlayingCard(Rank.Ace, Suit.Spades),
        new PlayingCard(Rank.Two, Suit.Spades),
        new PlayingCard(Rank.Three, Suit.Spades),
        new PlayingCard(Rank.Four, Suit.Spades),
        new PlayingCard(Rank.Five, Suit.Spades),
        new PlayingCard(Rank.Six, Suit.Spades),
        new PlayingCard(Rank.Seven, Suit.Spades),
        new PlayingCard(Rank.Eight, Suit.Spades),
        new PlayingCard(Rank.Nine, Suit.Spades),
        new PlayingCard(Rank.Ten, Suit.Spades),
        new PlayingCard(Rank.Jack, Suit.Spades),
        new PlayingCard(Rank.Queen, Suit.Spades),
        new PlayingCard(Rank.King, Suit.Spades),

        new PlayingCard(Rank.Ace, Suit.Diamonds),
        new PlayingCard(Rank.Two, Suit.Diamonds),
        new PlayingCard(Rank.Three, Suit.Diamonds),
        new PlayingCard(Rank.Four, Suit.Diamonds),
        new PlayingCard(Rank.Five, Suit.Diamonds),
        new PlayingCard(Rank.Six, Suit.Diamonds),
        new PlayingCard(Rank.Seven, Suit.Diamonds),
        new PlayingCard(Rank.Eight, Suit.Diamonds),
        new PlayingCard(Rank.Nine, Suit.Diamonds),
        new PlayingCard(Rank.Ten, Suit.Diamonds),
        new PlayingCard(Rank.Jack, Suit.Diamonds),
        new PlayingCard(Rank.Queen, Suit.Diamonds),
        new PlayingCard(Rank.King, Suit.Diamonds),

        new PlayingCard(Rank.Ace, Suit.Hearts),
        new PlayingCard(Rank.Two, Suit.Hearts),
        new PlayingCard(Rank.Three, Suit.Hearts),
        new PlayingCard(Rank.Four, Suit.Hearts),
        new PlayingCard(Rank.Five, Suit.Hearts),
        new PlayingCard(Rank.Six, Suit.Hearts),
        new PlayingCard(Rank.Seven, Suit.Hearts),
        new PlayingCard(Rank.Eight, Suit.Hearts),
        new PlayingCard(Rank.Nine, Suit.Hearts),
        new PlayingCard(Rank.Ten, Suit.Hearts),
        new PlayingCard(Rank.Jack, Suit.Hearts),
        new PlayingCard(Rank.Queen, Suit.Hearts),
        new PlayingCard(Rank.King, Suit.Hearts),
    ];
}
