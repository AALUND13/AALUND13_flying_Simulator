/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Sprite3/costumes/costume2.svg", {
        x: 42.53452323095101,
        y: 15.436860437769184
      }),
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 42.53329593552317,
        y: 15.436859187769187
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "BACK 2" },
        this.whenIReceiveBack2
      ),
      new Trigger(Trigger.BROADCAST, { name: "SHOP" }, this.whenIReceiveShop),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.airCash > 999) {
        this.costume = "costume1";
      }
      if (this.stage.vars.airCash < 999) {
        this.costume = "costume2";
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

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.airCash > 999) {
        if (this.touching("mouse")) {
          if (this.mouse.down) {
            this.stage.vars.income += 20;
            this.stage.vars.airCash += -1000;
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
