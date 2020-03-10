import User from "./user";
import { Player, Dealer } from "./user";
import CardDeck from "./carddeck";
import { Card } from "./carddeck";

export default class BlackJack {
    players: Player[] = [];
    dealer: Dealer = new Dealer("Dealer-X");
    carddeck: CardDeck = new CardDeck();
    options: BlackJackOptions;

    turn = 0;

    constructor(options?: { "no-bet"?: boolean; players?: number }) {
        this.options = { "no-bet": options!["no-bet"] || true, players: options!.players || 1 };
        this.playerAdd(this.options.players);
    }

    private playerAdd(playersNum: number) {
        for (let player = 0; player < playersNum; player++) {
            this.players.push(new Player("Player-" + player));
        }
    }

    deck() {
        console.log(this.carddeck.cards);
    }

    show() {
        if (this.turn !== this.players.length) console.log(this.dealer.hide_show());
        else console.log(this.dealer.show());
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
    }
    end() {
        while (this.dealer.point <= 16) {
            this.dealer.receive(this.carddeck.draw());
        }
    }
}

type BlackJackOptions = { "no-bet": boolean; players: number };
