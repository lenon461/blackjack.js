"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name) {
        this.name = name;
    }
}
exports.default = User;
class BlackJackUser extends User {
    constructor(name) {
        super(name);
        this.cards = [];
        this.point = 0;
    }
    receive(card) {
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
        if (isAce && this.point > 21)
            this.point -= 10;
        // if (isAce && this.cards.length === 2 && this.point === 21) this.status = "BlackJack";
        // else if (this.point > 21) this.status = "Bust";
    }
}
exports.BlackJackUser = BlackJackUser;
class Player extends BlackJackUser {
    // status: "Waiting" | "Receiving" | "Hitting" | "Standing" | "Betting" | "GiveUp" | "Bust" | "BlackJack";
    constructor(name) {
        super(name);
        this.cards = [];
        // this.status = "Waiting";
    }
    hit(card) {
        // this.status = "Hitting";
        this.cards.push(card);
        this.pointing();
    }
    stand() {
        // this.status = "Standing";
        this.pointing();
    }
}
exports.Player = Player;
class Dealer extends BlackJackUser {
    constructor(name) {
        super(name);
    }
}
exports.Dealer = Dealer;
