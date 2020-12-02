/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Airplanes3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Airplanes3/costumes/costume1.svg", {
        x: 40.83828124999994,
        y: 16.613905227184404
      })
    ];

    this.sounds = [new Sound("pop", "./Airplanes3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "rebirth" },
        this.whenIReceiveRebirth
      )
    ];
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

  *whenIReceiveRebirth() {
    this.deleteThisClone();
  }
}
