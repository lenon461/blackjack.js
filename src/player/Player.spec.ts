import test from "ava";
import { Player } from "./Player.model";
import { IPlayer } from "./Player.interface";

test("player are set", async (t) => {
    const player = new Player("jinseon");
    t.deepEqual(player.name, "jinseon");
    t.deepEqual(player.money, 0);
});

test("player methods are working", async (t) => {
    const player = new Player("jinseon");
    player.updateName("seonjin");
    player.updateMoney(30);
    t.deepEqual(player.name, "seonjin");
    t.deepEqual(player.money, 30);
});

test("toString is equivalent", async (t) => {
    const player = new Player("jinseon");
    t.deepEqual(player.toString(), `[${player.id}] jinseon 0`);
});
