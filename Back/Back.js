/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Back extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("BACK", "./Back/costumes/BACK.svg", {
        x: 4.23735666666667,
        y: 31.611656458333357
      })
    ];

    this.sounds = [new Sound("pop", "./Back/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "SHOP" }, this.whenIReceiveShop)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching("mouse")) {
        if (this.mouse.down) {
          this.broadcast("BACK 2");
          this.visible = false;
        }
      }
      yield;
    }
  }

  *whenIReceiveShop() {
    this.visible = true;
  }
}
