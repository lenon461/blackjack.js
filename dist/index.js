"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blackjack_1 = __importDefault(require("./blackjack"));
const blackjack = new blackjack_1.default({ players: 2 });
blackjack.start();
blackjack.show();
blackjack.action("Hit");
blackjack.action("Hit");
blackjack.action("Stand");
blackjack.action("Hit");
blackjack.action("Stand");
blackjack.end();
blackjack.show();
