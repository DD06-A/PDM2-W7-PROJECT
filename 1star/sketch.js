let spritesheet;
let spritedata;
let animaton= [];//array that will store all the images
let frame = 0;

function preload(){

spritedata = loadJSON('assets/lr_penguin2.json');//JSON= frame coordinates 
spritesheet= loadImage('assets/lr_penguin2.png');
}


function setup(){
 createCanvas(500,500)
    let frameData = spritedata.frames; //extracts the frames awway from the JSON
     for (let i = 0; i < frameData.length; i++) {//goes throgh every frame in JSON 
    //use json data to get info on frames
    let pos = frameData[i].position;// get position data
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);//get()crops part of the big image
    animation.push(img);//adds cropped frame into animation array
  }
}

function draw(){
 background(125);
  let index = floor(frame) % animation.length;//frame is a decimal, floor converts it to an integer,
  // %animations.length makes sure it loops back to the beginning of the array when it reaches the end
  image(animation[index], width/2-64, height/2-64, 100,100);
  //    frames array        xpos      ypos          w   h  
  frame += 0.1;

}

function keyPressed(){
    if (keyCode === LEFT_ARROW ){
        frame += 0.1;
    }
    if (keyCode === RIGHT_ARROW ){
        frame -= 0.1;
    }       
    if (keyCode === UP_ARROW ){
        frame += 0.1;
    }   
    if (keyCode === DOWN_ARROW ){
        frame -= 0.1;
    }
}

