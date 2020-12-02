/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Airplane9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Airplane9/costumes/costume1.svg", {
        x: 246.83431054022233,
        y: 80.699995
      })
    ];

    this.sounds = [new Sound("pop", "./Airplane9/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "rebirth" },
        this.whenIReceiveRebirth
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenIReceiveRebirth() {
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(0, 0);
  }

  *startAsClone() {
    this.visible = true;
    while (true) {
      yield* this.glide(5, this.random(-240, 240), this.random(-180, 180));
      yield;
    }
  }
}
