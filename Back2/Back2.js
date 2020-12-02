/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Back2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Back2/costumes/costume1.svg", {
        x: 24.54524620523017,
        y: 26.613242688323623
      })
    ];

    this.sounds = [new Sound("pop", "./Back2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "next 1" }, this.whenIReceiveNext1)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching("mouse")) {
        if (this.mouse.down) {
          this.broadcast("back 1");
          this.visible = false;
        }
      }
      yield;
    }
  }

  *whenIReceiveNext1() {
    this.visible = true;
  }
}
