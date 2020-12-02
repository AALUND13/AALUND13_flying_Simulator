/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.svg", {
        x: 98.00000000000003,
        y: 4.169102446617046
      }),
      new Costume("costume2", "./Sprite5/costumes/costume2.svg", {
        x: 98.00000000000003,
        y: 4.169162446617037
      }),
      new Costume("costume3", "./Sprite5/costumes/costume3.svg", {
        x: 98.00000000000003,
        y: 4.169162446617037
      }),
      new Costume("costume4", "./Sprite5/costumes/costume4.svg", {
        x: 98.00000000000003,
        y: 4.169167446617024
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "BACK 2" },
        this.whenIReceiveBack2
      ),
      new Trigger(Trigger.BROADCAST, { name: "SHOP" }, this.whenIReceiveShop),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.wait(0.5);
      this.costume = "costume1";
      yield* this.wait(0.5);
      this.costume = "costume2";
      yield* this.wait(0.5);
      this.costume = "costume3";
      yield* this.wait(0.5);
      this.costume = "costume4";
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
      if (this.touching("mouse")) {
        if (this.mouse.down) {
          yield* this.askAndWait("enter your codes");
        }
      }
      if (this.answer == "Freecash") {
        this.stage.vars.airCash += 80;
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching("mouse")) {
        if (this.mouse.down) {
          yield* this.askAndWait("enter your codes");
        }
      }
      if (this.answer == "AALUND13") {
        this.stage.vars.airCash += 50;
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.touching("mouse")) {
        if (this.mouse.down) {
          yield* this.askAndWait("enter your codes");
        }
      }
      if (this.answer == "flying simulator") {
        this.stage.vars.airCash += 65;
        return;
      }
      yield;
    }
  }
}
