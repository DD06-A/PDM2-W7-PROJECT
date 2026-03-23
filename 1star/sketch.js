
let spritesheet;
let spritedata;
let animation = [];//array that will store all the images
let frame = 0;
let x = 0;
let y = 0;

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
  image(animation[index], width/2-64 + x , height/2-64 + y, 100,100);//the width+64 centres the image, and then we add x and y to both, as it acts an equation for us to move it.
  //    frames array        xpos      ypos          w   h  
  frame += 0.1;

}

function keyPressed(){// NOT KEYISPRESSED BC ITS A BOOLEAN
  if (key === 'w')y -= 30;
  if (key === 'd') x += 30;
  if (key === 's') y += 30;
  if (key === 'a') x -= 30;

  return false;
}

