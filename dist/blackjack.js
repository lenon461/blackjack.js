"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const carddeck_1 = __importDefault(require("./carddeck"));
class BlackJack {
    constructor(options) {
        this.players = [];
        this.dealer = new user_1.Dealer("Dealer-X");
        this.carddeck = new carddeck_1.default();
        this.turn = 0;
        this.options = { "no-bet": options["no-bet"] || true, players: options.players || 1 };
        this.playerAdd(this.options.players);
    }
    playerAdd(playersNum) {
        for (let player = 0; player < playersNum; player++) {
            this.players.push(new user_1.Player("Player-" + player));
        }
    }
    deck() {
        console.log(this.carddeck.cards);
    }
    show() {
        if (this.turn !== this.players.length)
            console.log(this.dealer.hide_show());
        else
            console.log(this.dealer.show());
        this.players.map((player) => {
            console.log(player.show());
        });
    }
    start() {
        for (let dividingCount = 0; dividingCount < 2; dividingCount++) {
            this.players.map((player) => {
                player.receive(this.carddeck.draw());
            });
            this.dealer.receive(this.carddeck.draw());
        }
    }
    action(action) {
        const player = this.players[this.turn];
        // if (player.status === ("Bust" || "GiveUp" || "BlackJack")) {
        //     throw new Error("Invalid Player Action in " + player.status);
        // }
        if (action.toLowerCase() === "hit") {
            player.hit(this.carddeck.draw());
        }
        else if (action.toLowerCase() === "stand") {
            player.stand();
            this.turn++;
        }
        else {
            throw new Error("Wrong Player Action");
        }
    }
    end() {
        while (this.dealer.point <= 16) {
            this.dealer.receive(this.carddeck.draw());
        }
    }
}
exports.default = BlackJack;
