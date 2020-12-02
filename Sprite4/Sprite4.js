/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Sprite4/costumes/costume2.svg", {
        x: 38.37592164133039,
        y: 16.812721874999994
      }),
      new Costume("costume1", "./Sprite4/costumes/costume1.svg", {
        x: 38.717908167470114,
        y: 16.812723749999975
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite4/sounds/pop.wav")];

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
      if (this.stage.vars.airCash > 999999) {
        this.costume = "costume1";
      }
      if (this.stage.vars.airCash < 999999) {
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
      if (this.stage.vars.airCash > 999999) {
        if (this.touching("mouse")) {
          if (this.mouse.down) {
            this.stage.vars.rebirth += 1;
            this.stage.vars.airCash = 80;
            this.stage.vars.income = 0;
            this.stage.vars.flyingThingsYouHave = 0;
            this.broadcast("rebirth");
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
