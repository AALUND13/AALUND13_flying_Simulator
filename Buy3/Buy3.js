/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Buy3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Buy3/costumes/costume1.svg", {
        x: 42.91656971874994,
        y: 44.285586808424966
      })
    ];

    this.sounds = [new Sound("pop", "./Buy3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "next 1" },
        this.whenIReceiveNext1
      ),
      new Trigger(Trigger.BROADCAST, { name: "back 1" }, this.whenIReceiveBack1)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.airCash > 324) {
        if (this.touching("mouse")) {
          if (this.mouse.down) {
            this.stage.vars.income += 4;
            this.stage.vars.flyingThingsYouHave += 1;
            this.stage.vars.airCash += -325;
            this.sprites["Airplanes3"].createClone();
            while (!!this.mouse.down) {
              yield;
            }
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveNext1() {
    this.visible = false;
  }

  *whenIReceiveBack1() {
    this.visible = true;
  }
}
