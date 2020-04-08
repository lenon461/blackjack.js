export interface IPlayer {
    id: number;
    name: string;
    money: number;

    updateMoney(money: number): void;
    updateName(name: string): void;
    toString(): string;
}
