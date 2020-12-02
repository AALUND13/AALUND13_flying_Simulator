/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 11.249999999999915,
        y: 15.754932052267492
      })
    ];

    this.sounds = [new Sound("Collect", "./Sprite2/sounds/Collect.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      yield* this.wait(5);
      this.createClone();
      yield;
    }
  }

  *startAsClone() {
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.visible = true;
    while (true) {
      if (
        this.touching(this.sprites["Airplanes1"].andClones()) ||
        this.touching(this.sprites["Airplanes2"].andClones()) ||
          this.touching(this.sprites["Airplanes3"].andClones()) ||
            this.touching(this.sprites["Airplanes4"].andClones()) ||
              this.touching(this.sprites["Airplanes5"].andClones()) ||
                this.touching(this.sprites["Airplanes6"].andClones()) ||
                  this.touching(this.sprites["Airplane7"].andClones()) ||
                    this.touching(this.sprites["Airplane8"].andClones()) ||
                      this.touching(this.sprites["Airplane9"].andClones()) ||
                        this.touching(this.sprites["Airplane10"].andClones()) ||
                          null
      ) {
        yield* this.startSound("Collect");
        this.stage.vars.airCash += 5;
        this.deleteThisClone();
      }
      yield;
    }
  }
}
