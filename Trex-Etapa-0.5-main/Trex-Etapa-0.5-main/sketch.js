var trex, trex_running, edges;
var groundImage;
var piso;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  //criando o trex
  trex = createSprite(45,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  piso = createSprite(200,180,400,20);
  piso.addImage(groundImage);
  piso.x = piso.width/2;
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  //definir a cor do plano de fundo 
  background("white");
  
  //registrando a posição y do trex
  console.log(piso.x);
  piso.velocityX = -2;
  if (piso.x<0){
    piso.x = piso.width/2;
  }
  //pular quando tecla de espaço for pressionada
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
 //impedir que o trex caia
  trex.collide(piso);
  drawSprites();
}