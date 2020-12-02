/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Airplane10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Airplane10/costumes/costume1.svg", {
        x: 205.16664500000024,
        y: 175.69998500000025
      })
    ];

    this.sounds = [new Sound("pop", "./Airplane10/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "rebirth" },
        this.whenIReceiveRebirth
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone2)
    ];
  }

  *whenIReceiveRebirth() {
    this.deleteThisClone();
  }

  *startAsClone() {
    this.visible = true;
    while (true) {
      yield* this.glide(5, this.random(-240, 240), this.random(-180, 180));
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(0, 0);
  }

  *startAsClone2() {
    while (true) {
      this.direction += 5;
      yield;
    }
  }
}
