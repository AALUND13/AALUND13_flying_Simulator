/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Buy4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Buy4/costumes/costume1.svg", {
        x: 41,
        y: 16.986453982747378
      })
    ];

    this.sounds = [new Sound("pop", "./Buy4/sounds/pop.wav")];

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
      if (this.stage.vars.airCash > 499) {
        if (this.touching("mouse")) {
          if (this.mouse.down) {
            this.stage.vars.income += 16;
            this.stage.vars.flyingThingsYouHave += 1;
            this.stage.vars.airCash += -500;
            this.sprites["Airplanes4"].createClone();
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
