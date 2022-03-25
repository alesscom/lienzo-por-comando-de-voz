var x=0;
var y=0;
var dibuja_circulo ="";
var dibuja_rectangulo ="";
var SpeechRecognition =window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="el sistema esta escuchando: porfavor habla";
    recognition.start();
    document.getElementById("statusd").innerHTML=""
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML="el sistema entendio que dijiste: "+ content;
    if(content == "círculo"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="se empezo a dibujar un círculo";
        dibuja_circulo ="set";
    }
    if(content == "rectángulo"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="se empezo a dibujar un rectángulo";
        dibuja_rectangulo ="set";
    }
    else{
        document.getElementById("statusd").innerHTML=" pero no puedo dibujar eso, intenta con otra cosa"
    }
}
function color_relleno(){
    var r = Math.random()*255;
    var g = Math.random()*255;
    var b = Math.random()*255;
    fill(r,g, b);
}
function color_borde(){
    var r = Math.random()*255;
    var g = Math.random()*255;
    var b = Math.random()*255;
    stroke(r,g, b);
    strokeWeight(3);
}
function setup(){
    canvas = createCanvas(900,600);
}
function draw(){
    if(dibuja_circulo == "set"){
    color_relleno();
    color_borde();
    radio =Math.floor(Math.random()*100);
    circle(x, y, radio);
    document.getElementById("status").innerHTML="se dibujo un circulo";
    dibuja_circulo =""
    document.getElementById("statusd").innerHTML="";
    }
    if(dibuja_rectangulo == "set"){
        color_relleno();
        color_borde();
        ancho =Math.floor(Math.random()*200);
        altura =Math.floor(Math.random()*200);
        rect(x, y, ancho, altura);
        document.getElementById("status").innerHTML="se dibujo un rectangulo";
        dibuja_rectangulo =""
        document.getElementById("statusd").innerHTML="";
    }
}