/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Buy6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Buy6/costumes/costume1.svg", {
        x: 73.77517998096562,
        y: 17.519790649414034
      })
    ];

    this.sounds = [new Sound("pop", "./Buy6/sounds/pop.wav")];

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
      if (this.stage.vars.airCash > 4999) {
        if (this.touching("mouse")) {
          if (this.mouse.down) {
            this.stage.vars.income += 64;
            this.stage.vars.flyingThingsYouHave += 1;
            this.stage.vars.airCash += -5000;
            this.sprites["Airplanes6"].createClone();
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
