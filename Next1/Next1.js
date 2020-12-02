/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Next1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Next1/costumes/costume1.svg", {
        x: 24.50000000000003,
        y: 26.56666564941409
      })
    ];

    this.sounds = [new Sound("pop", "./Next1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "back 1" },
        this.whenIReceiveBack1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching("mouse")) {
        if (this.mouse.down) {
          this.broadcast("next 1");
          this.visible = false;
        }
      }
      yield;
    }
  }

  *whenIReceiveBack1() {
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching("mouse")) {
        if (this.mouse.down) {
          this.broadcast("next 1");
          this.visible = false;
        }
      }
      yield;
    }
  }
}
