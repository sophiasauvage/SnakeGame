const GRID_SIZE = 20;
let headX = 160
let headY = 200
let foodX
let foodY

function setup(){
    createCanvas(600, 600)
foodX = random(20, 580)
foodY= random(20, 580)
}

function draw(){
    background(50, 0, 80)

//SNAKE    
    fill(250, 0, 250)
    square(headX, headY, 20) 

//FOOD
fill(255)
    circle(foodX, foodY, GRID_SIZE)
     
if (foodX = headX){
foodX = foodX
}
  
if (foodY = headY){
foodY = foodY
}
}
