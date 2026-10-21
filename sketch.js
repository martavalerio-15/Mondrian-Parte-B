function setup() {
  createCanvas(800, 784);
  background(233, 237, 232);

  loadImage("textura.png", function(img) {
    textura = img;
    image(textura, 0, 0, 800, 784);
  });
}

function draw() {
  fill(238,36,0); //vermelho
  rect(0,0,360,310);

  fill(4,6,3); //linha preta
  rect(360,0,10,784);

  fill(4,6,3); //linha preta
  rect(0,310,800,10);

  fill(4,6,3); //linha preta
  rect(0,510,800,10);

  fill(4,6,3); //linha preta
  rect(0,510,800,10);

  fill(253,220,0); 
  rect(0,520,70,264);

  fill(4,6,3);
  rect(70,520,10,264);

  fill(35,33,118);
  rect(370,520,240,220);

  fill(4,6,3);
  rect(610,520,10,280);

  fill(4,6,3);
  rect(370,740,240,10);

}
