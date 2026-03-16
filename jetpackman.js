/*******************************************************/
// P5.play: Project
/*******************************************************/
let pause = 0;
let score = 0;
let obstacletime = 0;
let choice = 0;
let laserposition = 0;
let speed = -3;
save = 0;
let spawnspeed = 50;
let random = 0;
let randomAngle = 0;
let highscore = 0;
let colorchange = 0;
function presetup() {
    idleplayer = loadImage('../images/playeridle.png');
}
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    console.log("setup: ");
cnv = new Canvas(1920, 1080);

let intervalID = setInterval(() => {
    if (pause < 1) {
           score = score + 1
    }
}, 100);
let intervalparts = setInterval(() => {
    if (pause < 1) {
        obstacletime = obstacletime + 1
    }
}, 100)




world.gravity.y = 15;




wallTop = new Sprite(960, 20, 1920, 40, 'k');




wallBot = new Sprite(960, 1060, 1920, 40, 'k');




playersprite = new Sprite(100, 1020, 24, 52, 'd');




playersprite.color = 255,200,200;




playersprite.rotationSpeed = 2;

laserSprite = new Sprite(-500, 2500, 20, 400, 'l');
laserSprite2 = new Sprite(-500, 2500, 20, 450, 'l');
     laserSprite3 = new Sprite(-500, 2500, 20, 400, 'l');
laserSprite4 = new Sprite(-500, 2500, 20, 300, 'l');
laserRandom1 = new Sprite(-500, 2500, 20, 300, 'l');
 laserSprite.color = 255,0,0;
    laserSprite2.color = 255,0,0;
 wallSprite = new Sprite(-500, 2500, 200, 400, 'l');
wallSprite2 = new Sprite(-500, 2500, 200, 450, 'l');
replaySprite = new Sprite(width/2, -500, 150, 150);
laserRandom3 = new Sprite(-500, 2500, 150, 150);
replaySprite.visible = true;
replaySprite.rotationLock = true;
playersprite.rotationLock = true;
laserRandom3.rotationLock = true;
playersprite.image = (idleplayer);



}
//**** object functions */
function laser() {
    laserSprite = new Sprite(2200, 840, 20, 400, 'l');
laserSprite2 = new Sprite(2200, 265, 20, 450, 'l');
    laserSprite.color = 255,0,0;
    laserSprite.vel.x = speed;
    laserSprite.rotationLock = true;
    laserSprite2.color = 255,0,0;
    laserSprite2.vel.x = speed;
    laserSprite2.rotationLock = true;




       playersprite.rotationLock = true;
}
function laser2() {
    laserSprite3 = new Sprite(1920, 765, 20, 550, 'l');
laserSprite4 = new Sprite(1920, 190, 20, 300, 'l');
    laserSprite3.color = 255,0,0;
    laserSprite3.vel.x = speed;
    laserSprite3.rotationLock = true;
    laserSprite4.color = 255,0,0;
    laserSprite4.vel.x = speed;
    laserSprite4.rotationLock = true;
       playersprite.rotationLock = true;
}
function laserRandom() {
    laserposition = Math.random();
    laserposition = laserposition * 750
    laserposition = laserposition + 190;
    laserRandom1 = new Sprite(1920, laserposition, 20, 300, 'l');
    laserRandom1.color = 255,0,0;
    laserRandom1.vel.x = speed;
    laserRandom1.rotationLock = true;
       playersprite.rotationLock = true;
}
function wall() {
    wallSprite = new Sprite(1920, 840, 200, 400, 'l');
wallSprite2 = new Sprite(1920, 265, 200, 450, 'l');
    wallSprite.color = 255,0,0;
    wallSprite.vel.x = speed;
    wallSprite.rotationLock = true;
    wallSprite2.color = 255,0,0;
    wallSprite2.vel.x = speed;
    wallSprite2.rotationLock = true;
       playersprite.rotationLock = true;
       replaySprite.rotationLock = true;
}
function laserRotated() {
    random = Math.random();
    random = random * 750
    random = random + 150
    laserRandom3 = new Sprite(1920, random, 20, 300, 'l');
    randomAngle = Math.random();
    randomAngle = randomAngle * 90;
    laserRandom3.rotation = randomAngle;
    console.log(randomAngle);
    laserRandom3.vel.x = speed;
    laserRandom3.rotationLock = true;
}

//**** killfunction */
function killscreen() {
    console.log("HIT");
        replaySprite.visible = true;
        replaySprite.static = true;
        replaySprite.y = 540
        replaySprite.x = width/2
pause = 1;
laserSprite.vel.x = 0;
laserSprite.vel.y = 0;
laserSprite2.vel.x = 0;
laserSprite2.vel.y = 0;
laserSprite3.vel.x = 0;
laserSprite3.vel.y = 0;
 laserSprite4.vel.x = 0;
laserSprite4.vel.y = 0;
 laserRandom1.vel.x = 0;
laserRandom1.vel.y = 0;
wallSprite.vel.x = 0;
wallSprite.vel.y = 0;
 wallSprite2.vel.x = 0;
wallSprite2.vel.y = 0;
obstacletime = 0;
laserRandom3.vel.y = 0;
laserRandom3.vel.x = 0;
}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    //**** contant speed for the objects */
    if (pause < 1) {
         wallSprite2.vel.x = speed;
             wallSprite.vel.x = speed;
                 laserRandom3.vel.x = speed;
                     laserRandom1.vel.x = speed;
                         laserSprite4.vel.x = speed;
                             laserSprite3.vel.x = speed;
                                 laserSprite2.vel.x = speed;
                                     laserSprite.vel.x = speed;
    }
    //**** saving highscore */
    if (score > highscore) {
    highscore = score;
}
//**** stops the player from moving on the x axis when hit */
    playersprite.x = 100;
    //****spawner for obstacles */
       if (obstacletime >= spawnspeed) {
        save = choice;
       choice = Math.random();
    choice = choice * 25
    if (laserSprite.x < 0) {
            laserSprite.vel.x = 0
            laserSprite2.vel.x - 0
        if (choice >= 5 && choice < 10) {
          laser();
      }
    }
if (laserSprite3.x < 0) {
    laserSprite3.vel.x = 0
    laserSprite4.vel.x = 0
  if (choice < 5 && choice >= 0) {
          laser2();
      }
}
if (laserRandom1.x < 0) {
    laserRandom1.vel.x = 0
     if (choice >= 10 && choice < 15) {
            laserRandom();
        }
}
if (wallSprite.x < -0) {
    wallSprite.vel.x = 0
    wallSprite2.vel.x = 0
    if (choice >= 15 && choice < 20) {
            wall();
        }
}
if (laserRandom3.x < -0) {
    laserRandom3.vel.x = 0
        if (choice >= 20 && choice <= 25) {
            laserRotated();
        }
}



        obstacletime = 0;
        if (speed > -900) {
               speed = speed - 0.2;
        }
        if (spawnspeed > 30) {
            spawnspeed = spawnspeed - 3;
        }
    }
    background(255, 200, 200);
    //**** replay option */
         if (replaySprite.mouse.pressed() && replaySprite.visible == true) {
                 replaySprite.visible = false;
                 replaySprite.y = -500
                 laserSprite.x = -500;
                     laserSprite.vel.x = -3
                            world.gravity.y = 15;
                              laserSprite2.x = -500;
                     laserSprite2.vel.x = -3
                     laserSprite3.x = -500;
                     laserSprite3.vel.x = -3
                     laserSprite4.x = -500;
                     laserSprite4.vel.x = -3
                     wallSprite.x = -500;
                     wallSprite.vel.x = -3
                      wallSprite2.x = -500;
                     wallSprite2.vel.x = -3
                     laserRandom1.x = -500;
                     laserRandom3.vel.x = -500;
                     laserRandom3.x = -500;
                     spawnspeed = 50;
                     speed = -3;
        pause = 0;
        console.log("active");
        score = 0
 }
 //****keybinds */
    if (pause < 1) {
        if (kb.pressing ('up')) {
    if (playersprite.vel.y > -10) {
        playersprite.vel.y = playersprite.vel.y + -1;
    }
};
if (kb.released ('up')) {  
    if (playersprite.vel.y > 0) {
      playersprite.vel.y = playersprite.vel.y + 2;  
    }
};
//**** detects when you collide with a killable object */
    }
    if (playersprite.collides(laserSprite)) {
           killscreen();
    }
    if (playersprite.collides(laserSprite2)) {
       killscreen();
    }
    if (playersprite.collides(laserSprite3)) {
       killscreen();
    }
    if (playersprite.collides(laserSprite4)) {
        killscreen();
    }
          if (playersprite.collides(laserRandom1)) {
       killscreen();
    }
    if (playersprite.collides(wallSprite)) {
        if (playersprite.x < wallSprite.x - 100 && playersprite.y < 839) {
       killscreen();
    }
    }
    if (playersprite.collides(laserRandom3)) {
       killscreen();
    }
    if (playersprite.collides(wallSprite2)) {
         if (playersprite.x < wallSprite2.x - 100 && playersprite.y > 491) {
       killscreen();
    }
    }
     if (pause >= 1) {
       playersprite.vel.x = 0;
        playersprite.vel.y = 0;
        world.gravity.y = 0;
 }
 text("Score: "+ score + "m", 50, 50);
 text("Highscore: "+ highscore + "m", 50, 70);
}
/*******************************************************/
//  END OF APP
/*******************************************************/