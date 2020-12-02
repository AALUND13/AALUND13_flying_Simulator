/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Blue Sky 2 ", "./Stage/costumes/Blue Sky 2 .svg", {
        x: 241.89172499999995,
        y: 183.80000305175778
      })
    ];

    this.sounds = [
      new Sound("Glad you came", "./Stage/sounds/Glad you came.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];

    this.vars.myVariable = 0;
    this.vars.income = 0;
    this.vars.airCash = 80;
    this.vars.flyingThingsYouHave = 0;
    this.vars.rebirth = 0;
    this.vars.moreCash = "no";

    this.watchers.income = new Watcher({
      label: "income",
      style: "normal",
      visible: true,
      value: () => this.vars.income,
      x: 245,
      y: 175
    });
    this.watchers.airCash = new Watcher({
      label: "Air cash",
      style: "normal",
      visible: true,
      value: () => this.vars.airCash,
      x: 245,
      y: 148
    });
    this.watchers.flyingThingsYouHave = new Watcher({
      label: "flying things you have",
      style: "normal",
      visible: true,
      value: () => this.vars.flyingThingsYouHave,
      x: 245,
      y: 123
    });
    this.watchers.rebirth = new Watcher({
      label: "rebirth",
      style: "normal",
      visible: true,
      value: () => this.vars.rebirth,
      x: 245,
      y: 96
    });
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.vars.airCash += this.vars.income;
      yield* this.wait(1);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.vars.income = 0;
    this.vars.airCash = 80;
    this.vars.flyingThingsYouHave = 0;
    this.vars.moreCash = "no";
    this.vars.rebirth = 0;
  }

  *whenGreenFlagClicked3() {
    while (true) {
      yield* this.playSoundUntilDone("Glad you came");
      yield;
    }
  }
}
