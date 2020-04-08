import { BlackjackGameType } from "../gametype/BlackjackGameType";
import { IPlayingCard } from "../playingcard/PlayingCard.interface";
import { Player } from "../player/Player.model";

export class blackjack extends BlackjackGameType {
    player: Player = new Player("Player-X");
    dealer: Player = new Player("Dealer-X");
    options: BlackJackOptions;
    status: "Burst" | "BlackJack" | "Stand" | "Hitable" | "Ready" | "Start";

    turn = 0;

    constructor(options?: { "no-bet"?: boolean; players?: number }) {
        super();
        this.options = { "no-bet": options!["no-bet"] || true, players: options!.players || 1 };
        this.playerAdd(this.options.players);
        this.status = "Ready";
    }

    deck() {
        console.log(this.carddeck.cards);
    }

    log() {
        return { dealer: this.dealer, players: this.players };
    }

    show() {
        const result = [];
        if (this.turn !== this.players.length) result.push(this.dealer.hide_show());
        else result.push(this.dealer.show());
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
    action(action: string) {
        const player = this.players[this.turn];

        // if (player.status === ("Bust" || "GiveUp" || "BlackJack")) {
        //     throw new Error("Invalid Player Action in " + player.status);
        // }

        if (action.toLowerCase() === "hit") {
            player.hit(this.carddeck.draw());
        } else if (action.toLowerCase() === "stand") {
            player.stand();
            this.turn++;
        } else {
            throw new Error("Wrong Player Action");
        }

        if (player.point < 21) {
            this.status = "Hitable";
        } else if (player.point === 21) {
            this.status = "BlackJack";
        } else {
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
type BlackJackOptions = { "no-bet": boolean; players: number };
