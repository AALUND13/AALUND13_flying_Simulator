/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Buy9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Buy9/costumes/costume1.svg", {
        x: 102.49999999999997,
        y: 65.79513322493366
      })
    ];

    this.sounds = [new Sound("pop", "./Buy9/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "SHOP" }, this.whenIReceiveShop),
      new Trigger(
        Trigger.BROADCAST,
        { name: "BACK 2" },
        this.whenIReceiveBack2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveShop() {
    this.visible = true;
  }

  *whenIReceiveBack2() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.rebirth > 0) {
        if (this.stage.vars.airCash > 499999) {
          if (this.touching("mouse")) {
            if (this.mouse.down) {
              this.stage.vars.income += 850;
              this.stage.vars.flyingThingsYouHave += 1;
              this.stage.vars.airCash += -500000;
              this.sprites["Airplane9"].createClone();
              while (!!this.mouse.down) {
                yield;
              }
            }
          }
        }
      }
      yield;
    }
  }
}
