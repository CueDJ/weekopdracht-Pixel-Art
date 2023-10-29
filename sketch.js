let arrayColorBomb = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 6, 0],
  [0, 0, 0, 2, 3, 3, 3, 1, 5, 0],
  [0, 0, 2, 3, 3, 4, 4, 3, 0, 0],
  [0, 2, 2, 3, 3, 3, 4, 4, 3, 0],
  [0, 2, 2, 2, 3, 3, 3, 4, 3, 0],
  [0, 1, 2, 2, 2, 3, 3, 3, 3, 0],
  [0, 1, 1, 2, 2, 2, 2, 2, 2, 0],
  [0, 0, 1, 1, 1, 2, 2, 2, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
]
let arrayColorLink = [
  [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0],
  [0, 0, 2, 0, 3, 1, 1, 1, 1, 1, 1, 3, 0, 2, 0],
  [0, 0, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 0],
  [0, 0, 2, 2, 1, 2, 3, 2, 2, 3, 2, 1, 2, 2, 0],
  [0, 0, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 0],
  [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
  [0, 0, 0, 3, 3, 2, 2, 1, 1, 2, 2, 3, 3, 1, 0],
  [0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 1, 1, 1],
  [1, 1, 2, 1, 1, 1, 1, 3, 3, 3, 3, 3, 2, 1, 1],
  [1, 2, 2, 2, 1, 1, 2, 1, 1, 3, 3, 2, 2, 2, 1],
  [1, 1, 2, 1, 1, 1, 2, 3, 1, 1, 1, 1, 2, 2, 2],
  [1, 1, 2, 1, 1, 1, 2, 1, 1, 3, 3, 3, 3, 2, 0],
  [1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 0, 0, 0],
  [0, 2, 2, 2, 2, 2, 1, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
]
let arrayColorPizza = [
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 2, 2, 1, 1, 3, 3, 3, 1, 0, 0],
  [0, 0, 0, 1, 2, 2, 1, 3, 3, 3, 1, 1, 1, 0, 0],
  [0, 0, 1, 2, 2, 1, 3, 3, 3, 1, 4, 4, 1, 0, 0],
  [0, 1, 2, 2, 1, 3, 3, 3, 3, 1, 4, 4, 1, 0, 0],
  [0, 1, 2, 1, 3, 1, 1, 3, 3, 3, 1, 1, 3, 1, 0],
  [1, 2, 2, 1, 1, 4, 4, 1, 3, 3, 3, 3, 3, 1, 0],
  [1, 2, 1, 3, 1, 4, 4, 1, 3, 3, 3, 3, 3, 1, 0],
  [1, 2, 1, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 1, 0],
  [1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 1],
  [0, 0, 0, 1, 1, 1, 1, 1, 3, 1, 4, 4, 1, 3, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 4, 1, 3, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
]
let arrayColorCat = [
  [1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [1, 2, 1, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0],
  [1, 2, 3, 1, 1, 3, 2, 2, 1, 0, 0, 0, 0, 0, 0],
  [1, 4, 3, 0, 3, 4, 4, 4, 1, 0, 0, 0, 0, 0, 0],
  [1, 4, 0, 0, 4, 4, 4, 4, 1, 0, 0, 0, 0, 0, 0],
  [1, 0, 5, 0, 4, 5, 4, 4, 1, 0, 0, 0, 1, 1, 0],
  [1, 0, 5, 0, 0, 5, 4, 4, 1, 0, 0, 1, 4, 4, 1],
  [1, 0, 0, 6, 0, 0, 0, 0, 1, 1, 0, 1, 4, 1, 1],
  [0, 1, 0, 0, 0, 0, 0, 1, 4, 4, 1, 4, 4, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4, 1, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0]
]

let colorsBomb = ['white', '#000000', '#010031', '#333365', '#666698', 'orange', 'red']
let colorsLink = ['white', '#db6024', '#f6a24a', '#b2fc2d']
let colorsPizza = ['white', 'black', '#c94310', '#f3db05', '#e60e0f']
let colorsCat = ['white', 'black', '#eecdb2', '#616161', '#b5862f', '#30270b', '#f69988']
let amountPixels = [10, 15, 15, 15]
let placeHolder1 = 0
let placeHolder2 = 45
let placeHolder3 = 67.5
let placeHolder4 = 45


function setup() {
  createCanvas(800, 800);
  noStroke()
  background(220);
  textSize(20)
  textAlign(CENTER, CENTER);
  BombButton1 = new Button('Bomb', 118.75-20, 745, 100, 50, color('white'), color('black'));
  LinkButton2 = new Button('Link', 287.5-20, 745, 100, 50, color('white'), color('black'));
  PizzaButton3 = new Button('Pizza', 456.25-20, 745, 100, 50, color('white'), color('black'));
  CatButton4 = new Button('Cat', 625-20, 745, 100, 50, color('white'), color('black'));
  BombButton1.onClick = function () {placeHolder1 = 0};
  LinkButton2.onClick = function () {placeHolder1 = 1};
  PizzaButton3.onClick = function () {placeHolder1 = 2};
  CatButton4.onClick = function () { placeHolder1 = 3};
}

function draw() {
  if (placeHolder1 == 0) {
    for (let i = 0; i < amountPixels[0]; i++) {
      for (let j = 0; j < amountPixels[0]; j++) {
        fill(colorsBomb[arrayColorBomb[j][i]])
        rect(60 + placeHolder3 * i, 60 + placeHolder3 * j, placeHolder3, placeHolder3)
      }
    }
  }
  if (placeHolder1 == 1) {
    for (let i = 0; i < amountPixels[1]; i++) {
      for (let j = 0; j < amountPixels[1]; j++) {
        fill(colorsLink[arrayColorLink[j][i]])
        rect(60 + placeHolder2 * i, 60 + placeHolder2 * j, placeHolder2, placeHolder2)
      }
    }
  }
  if (placeHolder1 == 2) {
    for (let i = 0; i < amountPixels[2]; i++) {
      for (let j = 0; j < amountPixels[2]; j++) {
        fill(colorsPizza[arrayColorPizza[j][i]])
        rect(60 + placeHolder4 * i, 60 + placeHolder4 * j, placeHolder4, placeHolder4)
      }
    }
  }
  if (placeHolder1 == 3) {
    for (let i = 0; i < amountPixels[3]; i++) {
      for (let j = 0; j < amountPixels[3]; j++) {
        fill(colorsCat[arrayColorCat[j][i]])
        rect(60 + placeHolder4 * i, 60 + placeHolder4 * j, placeHolder4, placeHolder4)
      }
    }
  }
  BombButton1.display();
  LinkButton2.display();
  PizzaButton3.display();
  CatButton4.display();
}
