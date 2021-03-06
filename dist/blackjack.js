"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const cardgame_1 = __importDefault(require("./cardgame"));
class BlackJack extends cardgame_1.default {
    constructor(options) {
        super();
        this.players = [];
        this.dealer = new user_1.Dealer("Dealer-X");
        this.turn = 0;
        this.options = { "no-bet": options["no-bet"] || true, players: options.players || 1 };
        this.playerAdd(this.options.players);
        this.status = "Ready";
    }
    playerAdd(playersNum) {
        for (let player = 0; player < playersNum; player++) {
            this.players.push(new user_1.Player("Player-" + player));
        }
    }
    deck() {
        console.log(this.carddeck.cards);
    }
    log() {
        return { dealer: this.dealer, players: this.players };
    }
    show() {
        const result = [];
        if (this.turn !== this.players.length)
            result.push(this.dealer.hide_show());
        else
            result.push(this.dealer.show());
        this.players.map((player) => {
            result.push(player.show());
        });
        return result.join("\n");
    }
    start() {
        for (let dividingCount = 0; dividingCount < 2; dividingCount++) {
            this.players.map((player) => {
                player.receive(this.carddeck.draw());
            });
            this.dealer.receive(this.carddeck.draw());
        }
        this.status = "Start";
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
        if (player.point < 21) {
            this.status = "Hitable";
        }
        else if (player.point === 21) {
            this.status = "BlackJack";
        }
        else {
            this.status = "Burst";
        }
    }
    dealer_turn() {
        while (this.dealer.point <= 16) {
            this.dealer.receive(this.carddeck.draw());
        }
    }
    end() {
        const result = [];
        result.push(this.dealer.show());
        this.players.map((player) => {
            result.push(player.show());
        });
        return result.join("\n");
    }
}
exports.default = BlackJack;
