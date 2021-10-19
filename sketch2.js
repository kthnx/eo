var page;

var home, camera1, camera2, think, doT1, doT2, doT22, doT3, rm1, rm2, rm3, rm4, sea;


function preload() {
  sea = loadImage('1-search.png')
  home = loadImage('0-home.png');
  camera1 = loadImage('6-cam1.png');
  camera2 = loadImage('6-cam2.png');
  think = loadImage('7-load.png');
  doT1 = loadImage('2-idB.png');
  doT2 = loadImage('3-d1-1.png');
  doT22 = loadImage('3-d1-2.png');
  doT3 = loadImage('3-d2.png');
  rm1 = loadImage('4-idR.png');
  rm2 = loadImage('5-d1.png');
  rm3 = loadImage('5-d2.png');
  rm4 = loadImage('5-d3.png');
}

function setup () {
  createCanvas(375,667);
  background(240);
  fill(255);

  page = 0;
}

function inputEvent() {
 s = this.value();

  if (s == 'brave') {
    page = 2;
  } else if (s == 'align') {
    page = 5;
  } else {
    page = 1;
  }



}

function draw () {

  var inp = createInput('');
  inp.position(2,8);
  inp.size(50);
  inp.input(inputEvent);


if (page==0) {
  image(home,0,0);
}

  else if (page == 1) {
    image(sea,0,0);



  } else if (page == 2){ //doT id main
   image(doT1,0,0);
 } else if (page == 3) {
   image(doT2,0,0);
 } else if (page == 4) {
   image(doT3,0,0);
 }

 else if (page == 5){ //rocky mtn id main
  image(rm1,0,0);
}  else if (page == 6){
  image(rm2,0,0);
} else if (page == 7){
  image(rm3,0,0);
} else if (page == 8){
  image(rm4,0,0);
}



//camera

   else if (page == 10){
    image(camera1,0,0);
  } else if (page == 11){
   image(camera2,0,0);
 }

}

function mousePressed () {
  if (page==0 && dist(188,597,mouseX,mouseY)<50) {
    page = 10;
  } else
  if (page== 10 && mouseX>20 && mouseX<100 && mouseY>557 && mouseY<637){
    page=11;
  } else //v cam to doterra
  if (page== 10 && mouseX>0 && mouseX<375 && mouseY>30 && mouseY<527){
    page=2;
  } else //v cam to rocky mtn
  if (page== 11 && mouseX>0 && mouseX<375 && mouseY>30 && mouseY<527){
    page=5;
  } else

      // doT id tree
  if (page == 2 && mouseX>0 && mouseX<60 && mouseY>40 && mouseY<150) {
      page=3;
  } else
  if (page == 2 && mouseX>0 && mouseX<60 && mouseY>150 && mouseY<260) {
        page=4;
  } else
  if (page == 3 && mouseX>0 && mouseX<60 && mouseY>0 && mouseY<40) {
      page=2;
  } else
  if (page == 3 && mouseX>0 && mouseX<60 && mouseY>150 && mouseY<260) {
      page=4;
  } else
  if (page == 4 && mouseX>0 && mouseX<60 && mouseY>0 && mouseY<40) {
      page=2;
  } else
  if (page == 4 && mouseX>0 && mouseX<60 && mouseY>40 && mouseY<150) {
      page=3;
  } else

  // rocky mtn id tree
  if (page == 5 && mouseX>0 && mouseX<60 && mouseY>40 && mouseY<150) {
      page=6;
  } else
  if (page == 5 && mouseX>0 && mouseX<60 && mouseY>150 && mouseY<260) {
        page=7;
  } else
  if (page == 5 && mouseX>0 && mouseX<60 && mouseY>260 && mouseY<370) {
        page=8;
  }

   else
  if (page == 6 && mouseX>0 && mouseX<60 && mouseY>0 && mouseY<40) {
      page=5;
  } else
  if (page == 6 && mouseX>0 && mouseX<60 && mouseY>150 && mouseY<260) {
      page=7;
  } else
  if (page == 6 && mouseX>0 && mouseX<60 && mouseY>260 && mouseY<370) {
      page=8;
  }

   else
  if (page == 7 && mouseX>0 && mouseX<60 && mouseY>0 && mouseY<40) {
      page=5;
  } else
  if (page == 7 && mouseX>0 && mouseX<60 && mouseY>40 && mouseY<150) {
      page=6;
  } else
  if (page == 7 && mouseX>0 && mouseX<60 && mouseY>260 && mouseY<370) {
      page=8;
  }

  else
 if (page == 8 && mouseX>0 && mouseX<60 && mouseY>0 && mouseY<40) {
     page=5;
 } else
 if (page == 8 && mouseX>0 && mouseX<60 && mouseY>40 && mouseY<150) {
     page=6;
 } else
 if (page == 8 && mouseX>0 && mouseX<60 && mouseY>150 && mouseY<260) {
     page=7;
 }
}
