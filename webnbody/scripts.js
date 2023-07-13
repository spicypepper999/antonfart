// let year = 1960;
// alert(year);
// year = year + 1;
// alert(year);
// const age = 5;
// //age = 6;
// alert(age);

// Set up the canvas and context
let canvas = document.getElementById('game-canvas');
let context = canvas.getContext('2d');
canvas.width = window.innerWidth * .9;
canvas.height = window.innerHeight * .9;


//
//
//nbody stuff

const gravity = 9.8; 

let star1 = {x:200,y:500,mass:100,name:"star1",xVelocity:0.2,yVelocity:0,trailLength:1000};
let planet1 = {x:200,y:200,mass:10,name:"star1",xVelocity:2.3,yVelocity:0,trailLength:1000};
let moon1 = {x:200,y:150,mass:1,name:"star1",xVelocity:0.74,yVelocity:0,trailLength:1000};
let bodies = [star1, planet1, moon1];

function getDistance(body1, body2){
  let dx = body1.x - body2.x;
  let dy = body1.y - body2.y;
  let distance = Math.sqrt((dx*dx)+(dy*dy));
  return distance;
}

function getAngle(body1,body2){
  return Math.atan2(body1.y-body2.y,body1.x-body2.x);
}

function updateBodies(){
  for(let body1 of bodies){
    for(let body2 of bodies){
      if(!(body1 === body2)){
        let force = ((gravity*body2.mass)/(getDistance(body1,body2))**2);
        body1.xVelocity -= (Math.cos(getAngle(body1, body2)) * force);
        body1.yVelocity -= (Math.sin(getAngle(body1, body2)) * force);
      }
    }
  }
  for(let body3 of bodies){
    body3.x += body3.xVelocity;
    body3.y += body3.yVelocity;
  }
}

//nbody stuff
//
//



// Set up the player
let player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 20,
  speed: 5,
  color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
};

// Set up the game loop
function gameLoop() {

  // Move the player
  if (keys.ArrowUp) {
    if (player.y > 3 + player.size) { // this and the 3 other if statements prevent the player from going off screen
        player.y -= player.speed;
    }
  }
  if (keys.ArrowDown) {
    if (player.y < canvas.height - player.size - 3) {
        player.y += player.speed;
    }
  }
  if (keys.ArrowLeft) {
    if (player.x > player.size + 3) {
        player.x -= player.speed;
    }
  }
  if (keys.ArrowRight) {
    if (player.x < canvas.width - player.size - 3) {
        player.x += player.speed;
    }
  }

  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the player
  // context.beginPath();
  // context.arc(player.x, player.y, player.size, 0, 2 * Math.PI);
  // context.fillStyle = player.color;
  // //context.fillStyle = 'red';
  // context.fill();



  //
  //
  //nbody stuff

  // Draw space
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);


  // Draw the bodies
  for(let body of bodies){
    context.beginPath();
    context.arc(body.x, body.y, (10*Math.sqrt(body.mass/3.14)), 0, 2 * Math.PI);
    context.fillStyle = 'lightblue';
    context.fill();
  }

  updateBodies();

  //nbody stuff
  //
  //



  // Request the next frame
  window.requestAnimationFrame(gameLoop);
}

// Set up the key listeners
let keys = {};
document.addEventListener('keydown', function(event) {
  keys[event.code] = true;
});
document.addEventListener('keyup', function(event) {
  keys[event.code] = false;
});

// Start the game loop
gameLoop();