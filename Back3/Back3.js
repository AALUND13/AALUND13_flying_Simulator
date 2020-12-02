/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Back3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("BACK", "./Back3/costumes/BACK.svg", {
        x: 3.999986666666672,
        y: 21.762583664462085
      })
    ];

    this.sounds = [new Sound("pop", "./Back3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "BACK 2" }, this.whenIReceiveBack2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching("mouse")) {
        if (this.mouse.down) {
          this.broadcast("SHOP");
          this.visible = false;
        }
      }
      yield;
    }
  }

  *whenIReceiveBack2() {
    this.visible = true;
  }
}
