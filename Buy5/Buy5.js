/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Buy5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Buy5/costumes/costume1.svg", {
        x: 75.5,
        y: 49.86042194824216
      })
    ];

    this.sounds = [new Sound("pop", "./Buy5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "back 1" },
        this.whenIReceiveBack1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "next 1" },
        this.whenIReceiveNext1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveBack1() {
    this.visible = false;
  }

  *whenIReceiveNext1() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.airCash > 1249) {
        if (this.touching("mouse")) {
          if (this.mouse.down) {
            this.stage.vars.income += 32;
            this.stage.vars.flyingThingsYouHave += 1;
            this.stage.vars.airCash += -1250;
            this.sprites["Airplanes5"].createClone();
            while (!!this.mouse.down) {
              yield;
            }
          }
        }
      }
      yield;
    }
  }
}
