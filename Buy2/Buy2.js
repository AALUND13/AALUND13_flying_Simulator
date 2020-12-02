/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Buy2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("buy_1", "./Buy2/costumes/buy_1.svg", {
        x: 57.66662499999998,
        y: 65.56853579613653
      })
    ];

    this.sounds = [new Sound("pop", "./Buy2/sounds/pop.wav")];

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
      if (this.stage.vars.airCash > 179) {
        if (this.touching("mouse")) {
          if (this.mouse.down) {
            this.stage.vars.income += 2;
            this.stage.vars.flyingThingsYouHave += 1;
            this.stage.vars.airCash += -180;
            this.sprites["Airplanes2"].createClone();
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
