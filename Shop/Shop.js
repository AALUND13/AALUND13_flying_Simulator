/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Shop extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("shop", "./Shop/costumes/shop.svg", {
        x: 242.99999131039996,
        y: 173.00014335584208
      })
    ];

    this.sounds = [new Sound("pop", "./Shop/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "BACK 2" },
        this.whenIReceiveBack2
      ),
      new Trigger(Trigger.BROADCAST, { name: "SHOP" }, this.whenIReceiveShop)
    ];
  }

  *whenIReceiveBack2() {
    this.visible = false;
  }

  *whenIReceiveShop() {
    this.visible = true;
  }
}
