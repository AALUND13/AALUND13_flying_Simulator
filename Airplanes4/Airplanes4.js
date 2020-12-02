/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Airplanes4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Airplanes4/costumes/costume1.svg", {
        x: 61.554876598585594,
        y: 135.45684803635777
      })
    ];

    this.sounds = [new Sound("pop", "./Airplanes4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "rebirth" },
        this.whenIReceiveRebirth
      )
    ];
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

  *whenIReceiveRebirth() {
    this.deleteThisClone();
  }
}
