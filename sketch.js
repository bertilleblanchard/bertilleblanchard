navigator.geolocation.getCurrentPosition(getposition);// on récupère la position gps de l'utilisateur 

let myMap; // on déclare une variable pour notre carte
const mappa = new Mappa('Leaflet'); // on fait appel à la librairie js Leaflet

// variables pour récupérer la position gps de l'utilisateur
var position;
let userLat = 47.2040006;
let userLon = -1.5630606;

let mousePos;

// coordonnées de l'edna
let edna_lat = 47.2040006;
let edna_lng = -1.5630606;

// coordonnées de notre 1e zone = game of thrones
let zone1_lat = 56.18529440444472; //latitude
let zone1_lng = -4.0499994468011415; //longitude

// coordonnées de notre 2eme zone = skyfall
let zone2_lat = 56.61954932091212; //latitude
let zone2_lng = -4.930956589100273; //longitude

// coordonnées de notre 3eme zone = harry potter
let zone3_lat = 51.513050680594404; //latitude
let zone3_lng = -0.11555458758296332; //longitude

// coordonnées de notre 1e zone = The Crown
let zone4_lat = 56.955110; //latitude
let zone4_lng = -4.455042; //longitude

// coordonnées de notre 2eme zone = Pride and Prejudice
let zone5_lat = 51.103276; //latitude
let zone5_lng = -2.324337; //longitude

// coordonnées de notre 3eme zone = Ultron
let zone6_lat = 51.192913; //latitude
let zone6_lng = -0.774815; //longitude

// coordonnées de notre 3eme zone = Indiana jones dial of destiny
let zone7_lat = 55.60938; //latitude
let zone7_lng = -1.71044; //longitude

// coordonnées de notre 3eme zone = Dark knight rises
let zone8_lat = 52.56533; //latitude
let zone8_lng = 1.12359; //longitude

// coordonnées de notre 3eme zone = The end of the fucking world
let zone9_lat = 51.20203; //latitude
let zone9_lng = 0.44498; //longitude


// position de départ = uk
let initial_lat = 53.67951151754647;// latitude de départ
let initial_lng = -4.501293746728374;// longitude de départ

// variables pour notre avatar
let avatarLat;
let avatarLng;
let avatarPos;
let avatarPosX;
let avatarPosY;

// Calcul des distances
let distance_edna_avatar;
let distance_source1_avatar;
let distance_zone1_avatar;
let distance_zone2_avatar;
let distance_zone3_avatar;
let distance_zone4_avatar;
let distance_zone5_avatar;
let distance_zone6_avatar;
let distance_zone7_avatar;
let distance_zone8_avatar;
let distance_zone9_avatar;

// variables qui vont nous permettre de dessiner les zones
let diametreSource1_lat = 47.199044159443524; 
let diametreSource1_lng = -1.561260223388672; 

let sound1;
let sound2;
let sound3;
let sound4;
let sound5;
let sound6;
let sound7;
let sound8;
let sound9;

let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;

let avatar_img;



function preload(){
  sound1 = loadSound('assets/Winterfell.mp3');
  sound2 = loadSound('assets/Skyfall.mp3');
  sound3 = loadSound('assets/harrypotter.mp3');
  sound4 = loadSound('assets/thecrown.mp3');
  sound5 = loadSound('assets/prideandprejudice.mp3');
  sound6 = loadSound('assets/ultron.mp3');
  sound7 = loadSound('assets/indiana.mp3');
  sound8 = loadSound('assets/Bane speech.mp3');
  sound9 = loadSound('assets/fucking world.mp3');
  
  img1 = loadImage('assets/winterfell.png');
  img2 = loadImage('assets/skyfall.png');
  img3 = loadImage('assets/harrypotter.png');
  img4 = loadImage('assets/thecrown.jpg');
  img5 = loadImage('assets/prideandprejudice.jpg');
  img6 = loadImage('assets/ultron.jpg');
  img7 = loadImage('assets/indianajones.png');
  img8 = loadImage('assets/darkknight.png');
  img9 = loadImage('assets/theendofthefukingworld.png');
  
  avatar_img = loadImage('assets/avatar.png');
  
  
}

//position de depart et le zoom de la carte
// Lets put all our map options in a single object
// lat and lng are the starting point for the map.
const options = {
  lat: initial_lat,
  lng: initial_lng,
  zoom: 6.0,// zoom de départ
  style: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
}

function setup(){
  canvas = createCanvas(640,640); 

  // Create a tile map with the options declared
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas);
} // fin de la fonction setup


function getposition(position) {
  userLat = position.coords.latitude
  userLon = position.coords.longitude
}

function draw(){
    
   // Clear the previous canvas on every frame
  clear();
  
  mousePos = myMap.fromPointToLatLng(mouseX,mouseY);// on convertit la position de la souris en coordonnées gps      
  let edna = myMap.latLngToPixel(47.2040006, -1.5630606); // on convertit la position gps en position XY
  let userPos = myMap.latLngToPixel(userLat, userLon); // idem
  let zone1Pos = myMap.latLngToPixel(zone1_lat, zone1_lng); //converti les coordonées gps vers une position x y de la zone 1
   let zone2Pos = myMap.latLngToPixel(zone2_lat, zone2_lng); //converti les coordonées gps vers une position x y de la zone 2
  let zone3Pos = myMap.latLngToPixel(zone3_lat, zone3_lng); //converti les coordonées gps vers une position x y de la zone 3
  let zone4Pos = myMap.latLngToPixel(zone4_lat, zone4_lng); //converti les coordonées gps vers une position x y de la zone 3
  let zone5Pos = myMap.latLngToPixel(zone5_lat, zone5_lng); //converti les coordonées gps vers une position x y de la zone 3
  let zone6Pos = myMap.latLngToPixel(zone6_lat, zone6_lng); //converti les coordonées gps vers une position x y de la zone 3
  let zone7Pos = myMap.latLngToPixel(zone7_lat, zone7_lng); //converti les coordonées gps vers une position x y de la zone 3
  let zone8Pos = myMap.latLngToPixel(zone8_lat, zone8_lng); //converti les coordonées gps vers une position x y de la zone 3
  let zone9Pos = myMap.latLngToPixel(zone9_lat, zone9_lng); //converti les coordonées gps vers une position x y de la zone 3
  
  
  if(mouseIsPressed){
    avatarPos = myMap.latLngToPixel(mousePos.lat, mousePos.lng); // on récupère la position en pixels de la position gps de l'avatar
    avatarPosX = avatarPos.x;  // on met à jour avatarPosX
    avatarPosY = avatarPos.y; // on met à jour avatarPosY
    avatarLat = mousePos.lat; // on met à jour avatarLat
    avatarLng = mousePos.lng; // on met à jour avatarLng  
    //print("mousePos.lat = " + mousePos.lat);    
    //print("mousePos.lng = " + mousePos.lng);
    distance_edna_avatar = abs(edna_lat-avatarLat)+abs(edna_lng-avatarLng); //calcule la distance entre l'avatar et la gps de l'edna en absolue (valeur positive)
    print("distance_edna_avatar = " + distance_edna_avatar);//affiche ds la console la valeur qui sort
        distance_zone1_avatar = abs(zone1_lat-avatarLat)+abs(zone1_lng-avatarLng); //calcule la distance entre l'avatar et la gps de l'edna en absolue (valeur positive)
    print("distance_zone1_avatar = " + distance_zone1_avatar);//affiche ds la console la valeur qui sort
   // fin de mouse pressed
  
   distance_zone2_avatar = abs(zone2_lat-avatarLat)+abs(zone2_lng-avatarLng); //calcule la distance entre l'avatar et la gps de l'edna en absolue (valeur positive)
    print("distance_zone2_avatar = " + distance_zone2_avatar);//affiche ds la console la valeur qui sort
   // fin de mouse pressed

  distance_zone3_avatar = abs(zone3_lat-avatarLat)+abs(zone3_lng-avatarLng); //calcule la distance entre l'avatar et la gps de l'edna en absolue (valeur positive)
    print("distance_zone3_avatar = " + distance_zone3_avatar);//affiche ds la console la valeur qui sort
// fin de mouse pressed
    
     distance_zone4_avatar = abs(zone4_lat-avatarLat)+abs(zone4_lng-avatarLng); //calcule la distance entre l'avatar et la gps de l'edna en absolue (valeur positive)
    print("distance_zone4_avatar = " + distance_zone4_avatar);//affiche ds la console la valeur qui sort
   // fin de mouse pressed

  distance_zone5_avatar = abs(zone5_lat-avatarLat)+abs(zone5_lng-avatarLng); //calcule la distance entre l'avatar et la gps de l'edna en absolue (valeur positive)
    print("distance_zone5_avatar = " + distance_zone5_avatar);//affiche ds la console la valeur qui sort
// fin de mouse pressed
    
      distance_zone6_avatar = abs(zone6_lat-avatarLat)+abs(zone6_lng-avatarLng); //calcule la distance entre l'avatar et la gps de l'edna en absolue (valeur positive)
    print("distance_zone6_avatar = " + distance_zone6_avatar);//affiche ds la console la valeur qui sort
// fin de mouse pressed
    
          distance_zone7_avatar = abs(zone7_lat-avatarLat)+abs(zone7_lng-avatarLng); //calcule la distance entre l'avatar et la gps de l'edna en absolue (valeur positive)
    print("distance_zone7_avatar = " + distance_zone7_avatar);//affiche ds la console la valeur qui sort
// fin de mouse pressed
    
          distance_zone8_avatar = abs(zone8_lat-avatarLat)+abs(zone8_lng-avatarLng); //calcule la distance entre l'avatar et la gps de l'edna en absolue (valeur positive)
    print("distance_zone8_avatar = " + distance_zone8_avatar);//affiche ds la console la valeur qui sort
// fin de mouse pressed
    
          distance_zone9_avatar = abs(zone9_lat-avatarLat)+abs(zone9_lng-avatarLng); //calcule la distance entre l'avatar et la gps de l'edna en absolue (valeur positive)
    print("distance_zone9_avatar = " + distance_zone9_avatar);//affiche ds la console la valeur qui sort
// fin de mouse pressed
    
    
  }
  /*
  if(abs(edna_lat-mousePos.lat)<0.005 && abs(edna_lng-mousePos.lng)<0.005){
    print("l'utilisateur est entré dans la zone de l'EDNA")
  }
  */

  /////////////////////////////
  // avatar /////////////////////
  /////////////////////////////

   image(avatar_img, avatarPosX, avatarPosY,50, 60); //on dessine l'avatar
  
  
  /////////////////////////////
  // ZONE 1 ///////////////////
  /////////////////////////////
  

  if(distance_zone1_avatar<0.30135443650259486
    && !sound1.isPlaying()){
    sound1.play();
    print("l'avatar est entré dans la zone ")
  }
  
  if(distance_zone1_avatar>0.30135443650259486){
    sound1.stop();
  }
  
    /////////////////////////////
  // ZONE 2 ///////////////////
  /////////////////////////////
  
  
  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 1 et la souris 
  if(distance_zone2_avatar<0.30135443650259486
    && !sound2.isPlaying()){
    sound2.play();
    print("l'avatar est entré dans la zone 2")
  }
  // si on sort de la zone
  if(distance_zone2_avatar>0.30135443650259486){
    sound2.stop();
  //  print("l'avatar est sorti de la zone 1")
  }

  
  /////////////////////////////
  // ZONE 3 ///////////////////
  /////////////////////////////
  
  
  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 3 et la souris 
  if(distance_zone3_avatar<0.30135443650259486
    && !sound3.isPlaying()){
    sound3.play();
    print("l'avatar est entré dans la zone 3")
  }
  // si on sort de la zone
  if(distance_zone3_avatar>0.30135443650259486){
    sound3.stop();
  }
  
    /////////////////////////////
  // ZONE 4 ///////////////////
  /////////////////////////////
  
  
  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 3 et la souris 
  if(distance_zone4_avatar<0.30135443650259486
    && !sound4.isPlaying()){
    sound4.play();
    print("l'avatar est entré dans la zone 4")
  }
  // si on sort de la zone
  if(distance_zone4_avatar>0.30135443650259486){
    sound4.stop();
  }
  
    /////////////////////////////
  // ZONE 5 ///////////////////
  /////////////////////////////
  
  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 3 et la souris 
  if(distance_zone5_avatar<0.30135443650259486
    && !sound5.isPlaying()){
    sound5.play();
    print("l'avatar est entré dans la zone 5")
  }
  // si on sort de la zone
  if(distance_zone5_avatar>0.30135443650259486){
    sound5.stop();
  //  print("l'avatar est sorti de la zone 1")
  }
  
  /////////////////////////////
  // ZONE 6 ///////////////////
  /////////////////////////////

  
  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 3 et la souris 
  if(distance_zone6_avatar<0.30135443650259486
    && !sound6.isPlaying()){
    sound6.play();
    print("l'avatar est entré dans la zone 6")
  }
  // si on sort de la zone
  if(distance_zone6_avatar>0.30135443650259486){
    sound6.stop();
  //  print("l'avatar est sorti de la zone 1")
  }
  
    /////////////////////////////
  // ZONE 7 ///////////////////
  /////////////////////////////

  
  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 3 et la souris 
  if(distance_zone7_avatar<0.30135443650259486
    && !sound7.isPlaying()){
    sound7.play();
    print("l'avatar est entré dans la zone 7")
  }
  // si on sort de la zone
  if(distance_zone7_avatar>0.30135443650259486){
    sound7.stop();
  //  print("l'avatar est sorti de la zone 1")
  }
  
  
    /////////////////////////////
  // ZONE 8 ///////////////////
  /////////////////////////////

  
  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 3 et la souris 
  if(distance_zone8_avatar<0.30135443650259486
    && !sound8.isPlaying()){
    sound8.play();
    print("l'avatar est entré dans la zone 8")
  }
  // si on sort de la zone
  if(distance_zone8_avatar>0.30135443650259486){
    sound8.stop();
  //  print("l'avatar est sorti de la zone 1")
  }
  
  
    /////////////////////////////
  // ZONE 9 ///////////////////
  /////////////////////////////
  
  
  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 3 et la souris 
  if(distance_zone9_avatar<0.30135443650259486
    && !sound9.isPlaying()){
    sound9.play();
    print("l'avatar est entré dans la zone 9")
  }
  // si on sort de la zone
  if(distance_zone9_avatar>0.30135443650259486){
    sound9.stop();
  //  print("l'avatar est sorti de la zone 1")
  }
  
    imageMode(CENTER);
  image(img1, zone1Pos.x,zone1Pos.y, 70, 70);
  image(img2, zone2Pos.x,zone2Pos.y, 70,70);
  image(img3, zone3Pos.x,zone3Pos.y, 70, 70);
  image(img4, zone4Pos.x,zone4Pos.y, 70, 70);
  image(img5, zone5Pos.x,zone5Pos.y, 70, 70);
  image(img6, zone6Pos.x,zone6Pos.y, 70, 70);
  image(img7, zone7Pos.x,zone7Pos.y, 70, 70);
  image(img8, zone8Pos.x,zone8Pos.y, 70, 70);
  image(img9, zone9Pos.x,zone9Pos.y, 70, 70);
  
  textAlign(CENTER);
  fill ("white");
  stroke("black");
  strokeWeight(3);
  textSize(10);
  textStyle("BOLD");
  text ("Game of Thrones", zone1Pos.x, zone1Pos.y);
  text ("Skyfall", zone2Pos.x, zone2Pos.y);
  text ("Harry Potter", zone3Pos.x, zone3Pos.y);
  text ("The Crown", zone4Pos.x, zone4Pos.y);
  text ("Pride and Prejudice", zone5Pos.x, zone5Pos.y);
  text ("Ultron", zone6Pos.x, zone6Pos.y);
  text ("Indiana Jones Dial of Destiny", zone7Pos.x, zone7Pos.y);
  text ("Dark Knight Rises", zone8Pos.x, zone8Pos.y);
  text ("The end of the f****g world", zone9Pos.x, zone9Pos.y); 
   
} // fin de la fonction draw




// Test distance
function getDistance(origin, destination) {
    // return distance in meters
    var lon1 = toRadian(origin[1]),
        lat1 = toRadian(origin[0]),
        lon2 = toRadian(destination[1]),
        lat2 = toRadian(destination[0]);

    var deltaLat = lat2 - lat1;
    var deltaLon = lon2 - lon1;

    var a = Math.pow(Math.sin(deltaLat/2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon/2), 2);
    var c = 2 * Math.asin(Math.sqrt(a));
    var EARTH_RADIUS = 6371;
    return c * EARTH_RADIUS * 1000;
}
function toRadian(degree) {
    return degree*Math.PI/180;
}






