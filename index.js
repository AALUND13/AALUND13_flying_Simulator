import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Airplanes1 from "./Airplanes1/Airplanes1.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Buy1 from "./Buy1/Buy1.js";
import Airplanes2 from "./Airplanes2/Airplanes2.js";
import Buy2 from "./Buy2/Buy2.js";
import Airplanes3 from "./Airplanes3/Airplanes3.js";
import Buy3 from "./Buy3/Buy3.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Airplanes4 from "./Airplanes4/Airplanes4.js";
import Buy4 from "./Buy4/Buy4.js";
import Next1 from "./Next1/Next1.js";
import Back2 from "./Back2/Back2.js";
import Airplanes5 from "./Airplanes5/Airplanes5.js";
import Buy5 from "./Buy5/Buy5.js";
import Airplanes6 from "./Airplanes6/Airplanes6.js";
import Buy6 from "./Buy6/Buy6.js";
import Shop from "./Shop/Shop.js";
import Back from "./Back/Back.js";
import Back3 from "./Back3/Back3.js";
import Airplane7 from "./Airplane7/Airplane7.js";
import Buy7 from "./Buy7/Buy7.js";
import Airplane8 from "./Airplane8/Airplane8.js";
import Buy8 from "./Buy8/Buy8.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Airplane9 from "./Airplane9/Airplane9.js";
import Buy9 from "./Buy9/Buy9.js";
import Airplane10 from "./Airplane10/Airplane10.js";
import Buy10 from "./Buy10/Buy10.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Airplanes1: new Airplanes1({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Sprite1: new Sprite1({
    x: -13,
    y: -4.999999999999972,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  Buy1: new Buy1({
    x: -174,
    y: -167,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 29
  }),
  Airplanes2: new Airplanes2({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Buy2: new Buy2({
    x: -80,
    y: -166,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 12
  }),
  Airplanes3: new Airplanes3({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 150,
    visible: false,
    layerOrder: 2
  }),
  Buy3: new Buy3({
    x: 17.999999999999986,
    y: -165.99999999999997,
    direction: 90,
    costumeNumber: 1,
    size: 150,
    visible: true,
    layerOrder: 11
  }),
  Sprite2: new Sprite2({
    x: -93,
    y: 55,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Airplanes4: new Airplanes4({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 5
  }),
  Buy4: new Buy4({
    x: 96.00000000000001,
    y: -114,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  }),
  Next1: new Next1({
    x: 204,
    y: -151,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9
  }),
  Back2: new Back2({
    x: -215,
    y: -148.99999999999997,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 15
  }),
  Airplanes5: new Airplanes5({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Buy5: new Buy5({
    x: -95,
    y: -150,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  Airplanes6: new Airplanes6({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Buy6: new Buy6({
    x: 57,
    y: -119,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 14
  }),
  Shop: new Shop({
    x: -5,
    y: 14.999999999999986,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 17
  }),
  Back: new Back({
    x: 199,
    y: 153,
    direction: 90,
    costumeNumber: 1,
    size: 150,
    visible: false,
    layerOrder: 18
  }),
  Back3: new Back3({
    x: 200,
    y: -98,
    direction: 90,
    costumeNumber: 1,
    size: 150,
    visible: true,
    layerOrder: 16
  }),
  Airplane7: new Airplane7({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 19
  }),
  Buy7: new Buy7({
    x: -176,
    y: -99.00000000000001,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 24
  }),
  Airplane8: new Airplane8({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 20
  }),
  Buy8: new Buy8({
    x: -33.99999999999999,
    y: -98.99999999999999,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 21
  }),
  Sprite3: new Sprite3({
    x: -192,
    y: -34.999999999999986,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 22
  }),
  Sprite4: new Sprite4({
    x: 118.00000000000003,
    y: 161,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 23
  }),
  Sprite5: new Sprite5({
    x: 177,
    y: 124,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 25
  }),
  Airplane9: new Airplane9({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 26
  }),
  Buy9: new Buy9({
    x: -136,
    y: 9.999999999999993,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 30
  }),
  Airplane10: new Airplane10({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 27
  }),
  Buy10: new Buy10({
    x: 76.00000000000003,
    y: -95,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 28
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
