/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Buy8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Buy8/costumes/costume1.svg", {
        x: 82.916665,
        y: 54.288733593749996
      })
    ];

    this.sounds = [new Sound("pop", "./Buy8/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "BACK 2" },
        this.whenIReceiveBack2
      ),
      new Trigger(Trigger.BROADCAST, { name: "SHOP" }, this.whenIReceiveShop)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.airCash > 49999) {
        if (this.touching("mouse")) {
          if (this.mouse.down) {
            this.stage.vars.income += 275;
            this.stage.vars.flyingThingsYouHave += 1;
            this.stage.vars.airCash += -50000;
            this.sprites["Airplane8"].createClone();
            while (!!this.mouse.down) {
              yield;
            }
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveBack2() {
    this.visible = false;
  }

  *whenIReceiveShop() {
    this.visible = true;
  }
}
