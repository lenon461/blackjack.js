import { Card } from "./carddeck";
export default class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export class BlackJackUser extends User {
    cards: Card[] = [];
    point: number = 0;

    constructor(name: string) {
        super(name);
    }

    receive(card: Card) {
        // this.status = "Receiving";
        this.cards.push(card);
        this.pointing();
    }

    pointing() {
        let isAce = false;
        this.point = 0;
        this.cards.map((card) => {
            switch (card.rank) {
                case "2":
                    this.point += 2;
                    break;
                case "3":
                    this.point += 3;
                    break;
                case "4":
                    this.point += 4;
                    break;
                case "5":
                    this.point += 5;
                    break;
                case "6":
                    this.point += 6;
                    break;
                case "7":
                    this.point += 7;
                    break;
                case "8":
                    this.point += 8;
                    break;
                case "9":
                    this.point += 9;
                    break;
                case "T":
                    this.point += 10;
                    break;
                case "J":
                    this.point += 10;
                    break;
                case "Q":
                    this.point += 10;
                    break;
                case "K":
                    this.point += 10;
                    break;
                case "A":
                    isAce = true;
                    this.point += 11;
                    break;
                default:
                    throw new Error("Invalid Card Rank");
            }
        });
        if (isAce && this.point > 21) this.point -= 10;

        // if (isAce && this.cards.length === 2 && this.point === 21) this.status = "BlackJack";
        // else if (this.point > 21) this.status = "Bust";
    }

    show() {
        const status: string[] = [];
        status.push(`+------------------------+`);
        status.push(`|        ${this.name}        |`);
        status.push(`|                        |`);
        this.cards.map((card, index) => {
            status.push(`|         ${index + 1}. ${this.cards[index].suit[0]}${this.cards[index].rank}          |`);
        });
        status.push(`|                        |`);
        status.push(`|         < ${this.point} >         |`);
        status.push(`+------------------------+`);
        return status.join("\n");
    }
}

export class Player extends BlackJackUser {
    // status: "Waiting" | "Receiving" | "Hitting" | "Standing" | "Betting" | "GiveUp" | "Bust" | "BlackJack";
    constructor(name: string) {
        super(name);
        this.cards = [];
        // this.status = "Waiting";
    }

    hit(card: Card) {
        // this.status = "Hitting";
        this.cards.push(card);
        this.pointing();
    }
    stand() {
        // this.status = "Standing";
        this.pointing();
    }
}

export class Dealer extends BlackJackUser {
    constructor(name: string) {
        super(name);
    }

    hide_show() {
        const status: string[] = [];
        status.push(`+------------------------+`);
        status.push(`|        ${this.name}        |`);
        status.push(`|                        |`);
        status.push(`|         ${1}. ${this.cards[0].suit[0]}${this.cards[0].rank}          |`);
        status.push(`|         2. **          |`);
        status.push(`|                        |`);
        status.push(`|         < ?? >         |`);
        status.push(`+------------------------+`);
        return status.join("\n");
    }

    // const dealerStatus = () => {
    //     const dealerStatus = [];
    //     dealerStatus.push(`+------------------------+`);
    //     dealerStatus.push(`|        ${this.dealer.name}        |`);
    //     dealerStatus.push(`|                        |`);
    //     dealerStatus.push(`|         1. **          |`);
    //     dealerStatus.push(`|         2. ${this.dealer.cards[1].suit[0]}${this.dealer.cards[1].rank}          |`);
    //     dealerStatus.push(`|                        |`);
    //     dealerStatus.push(`|         < ?? >         |`);
    //     dealerStatus.push(`+------------------------+`);
    //     return dealerStatus.join("\n");
    // };
    // const PlayersStatus: string[] = [];

    // console.log(dealerStatus());
}
