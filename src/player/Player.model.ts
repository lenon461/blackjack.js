import { IPlayer } from "./Player.interface";

export class Player implements IPlayer {
    id: number;
    name: string;
    money: number;

    constructor(name: string) {
        this.id = Math.random() * 1000;
        this.name = name;
        this.money = 0;
    }

    public updateMoney(money: number): void {
        this.money += money;
    }

    public updateName(name: string): void {
        this.name = name;
    }

    public toString(): string {
        return `[${this.id}] ${this.name} ${this.money}`;
    }
}
