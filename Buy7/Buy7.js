/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Buy7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Buy7/costumes/costume1.svg", {
        x: 55.957246951367694,
        y: 62.50762028115386
      })
    ];

    this.sounds = [new Sound("pop", "./Buy7/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "BACK 2" },
        this.whenIReceiveBack2
      ),
      new Trigger(Trigger.BROADCAST, { name: "SHOP" }, this.whenIReceiveShop),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveBack2() {
    this.visible = false;
  }

  *whenIReceiveShop() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.airCash > 12499) {
        if (this.touching("mouse")) {
          if (this.mouse.down) {
            this.stage.vars.income += 175;
            this.stage.vars.flyingThingsYouHave += 1;
            this.stage.vars.airCash += -12500;
            this.sprites["Airplane7"].createClone();
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
