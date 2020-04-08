import { IPlayingCard } from "../playingcard/PlayingCard.interface";

export class ShuffleService {
    shuffle(cards: IPlayingCard[]): IPlayingCard[] {
        cards.sort(() => Math.random() - Math.random());
        return cards;
    }
}

export class ICardGametype extends ShuffleService {
    cardsAllowed: IPlayingCard[] = [];
    carddeck: IPlayingCard[] = this.shuffle(this.cardsAllowed);
}
