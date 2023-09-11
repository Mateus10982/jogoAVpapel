const Usuario= document.getElementById('Usuario');
const Fundo= document.getElementById('fundo');
const tela= document.getElementById('tela');
const muro= document.getElementById('muro');
const letra= document.getElementById('letra');

const div_area1= document.getElementById('area1');
const div_area2= document.getElementById('area2');
const div_area3= document.getElementById('area3');
const div_area4= document.getElementById('area4');
const menudeResultado= document.getElementById('menudeResultado');
const telaPReta= document.getElementById('telaPReta');
const result22= document.getElementById('result22');
	var posiUsuario;
	var barreira;
var inclina=0;
var leftU =25;
var topU=95;
var gra=2;
var speed=18;
var leftfundo =0;
var velofundo=1;
var local=0;
var resultado=true;
var pauseplay=true;
var limite=true;
var ganhou=false;
/*Função para pause*/
	falapause();
	colidiu();
	function novamente(){
		 	location.reload(true);
	}


 if(pauseplay){
document.addEventListener("keydown",function(event){
	moveUsuario(event);
});
document.addEventListener("click",function(event){
document.getElementById('cimaa').addEventListener("click",moveUsuarioCelular(event) );
document.getElementById('baixoo').addEventListener("click",moveUsuarioCelular(event) );
document.getElementById('advance').addEventListener("click",moveUsuarioCelular(event) );
});


/*funções automaticas*/
gravidade();
fundo();
areas();
colisaoObst();
escapetela();

}

function moveUsuarioCelular(event){
	if(pauseplay){
    if (event.target.id === "cimaa") {
       topU -=5;
		inclina =(inclina > -45) ? inclina -2 : inclina;
		Usuario.style.top=topU +"px";
		Usuario.style.transform="rotate("+inclina+"deg)";
		}
     else if (event.target.id === "baixoo") {
       topU +=5;
			inclina =(inclina < 45) ? inclina + 2 : inclina;
		Usuario.style.top=topU +"px";
		Usuario.style.transform="rotate("+inclina+"deg)";
		
    }else if (event.target.id === "advance") {
      leftU +=4;
		Usuario.style.left=leftU +"px";
    }
	}
}



function moveUsuario(event){
	/*novo movimento*/
	if(pauseplay){
		/*cima(w)*/
		if(event.keyCode === 87 ){
	topU -=5;
		inclina =(inclina > -45) ? inclina -2 : inclina;
		Usuario.style.top=topU +"px";
		Usuario.style.transform="rotate("+inclina+"deg)";
		}
		/*baixo(s)*/
			else if(event.keyCode === 83 ){
	topU +=5;
			inclina =(inclina < 45) ? inclina + 2 : inclina;
		Usuario.style.top=topU +"px";
		Usuario.style.transform="rotate("+inclina+"deg)";
		}
			else if(event.keyCode === 68 ){
	leftU +=13;
		Usuario.style.left=leftU +"px";
	}
	}

}
/*Gravidade*/

function gravidade() {
setInterval(function(){
		if(pauseplay){

	 posiUsuario = Usuario.getBoundingClientRect();
  const posiFundo = Fundo.getBoundingClientRect();

  
  if ( posiUsuario.top <= posiFundo.bottom ) {
    topU += gra;
	if(limite){ leftU+= 2; Usuario.style.left=leftU +"px"; }else if(!limite){leftU -= 2;}
	inclina =(inclina > 0 ) ? --inclina : (inclina < 0)? ++inclina : inclina;
    Usuario.style.top = topU + "px";
		Usuario.style.transform="rotate("+inclina+"deg)";
  }					}
},90);

}

/*Movimento do fundo */
function fundo() {
setInterval(function(){
		if(pauseplay){

  const posiFundo = Fundo.getBoundingClientRect();
  const posiTela = tela.getBoundingClientRect();

  
  if ( posiFundo.right != posiTela.right ) {
     leftfundo -= velofundo;
    Fundo.style.left = leftfundo + "px";
  }
		}
},speed);	}

function areas(){
	setInterval(function(){

     posiUsuario = Usuario.getBoundingClientRect();
    const posiarea1 = div_area1.getBoundingClientRect();
    const posiarea2 = div_area2.getBoundingClientRect();
    const posiarea3 = div_area3.getBoundingClientRect();
    const posiarea4 = div_area4.getBoundingClientRect();

     if (
        posiUsuario.right >= posiarea1.left &&
        posiUsuario.bottom >= posiarea1.top &&
        posiUsuario.left <= posiarea1.right &&
        posiUsuario.top <= posiarea1.bottom
    ) {
        local = 1;
		limii();
    } else if (
        posiUsuario.right >= posiarea2.left &&
        posiUsuario.bottom >= posiarea2.top &&
        posiUsuario.left <= posiarea2.right &&
        posiUsuario.top <= posiarea2.bottom
    ) {
        local = 2;
		velofundo=2;
		limii();
    } else if (
        posiUsuario.right >= posiarea3.left &&
        posiUsuario.bottom >= posiarea3.top &&
        posiUsuario.left <= posiarea3.right &&
        posiUsuario.top <= posiarea3.bottom
    ) {
        local = 3;
		velofundo=3;
		limii();
    } else if (
        posiUsuario.right >= posiarea4.left &&
        posiUsuario.bottom >= posiarea4.top &&
        posiUsuario.left <= posiarea4.right &&
        posiUsuario.top <= posiarea4.bottom
    ) {
        local = 4;
		velofundo=3;
    }

	},100);}
		/*console.log("Ouve colisão com o obstculo"+local+".");*/

function colisaoObst(){
	setInterval(function(){
	if(pauseplay){

switch (local) {
case 1:
		let obsTarea1=["obs1","obs2","obs3","obs4","obs5","obs6","obs7"];
	for(let I=0;I < obsTarea1.length;++I){

const obsatualID= document.getElementById(obsTarea1[I]);
const obsatual = obsatualID.getBoundingClientRect();
     posiUsuario = Usuario.getBoundingClientRect();

		if (
        posiUsuario.right >=obsatual.left &&
        posiUsuario.bottom >= obsatual.top &&
        posiUsuario.left <= obsatual.right &&
        posiUsuario.top <= obsatual.bottom
    ) {
		resultado=false;
		break;
	}
	}
break;
case 2:
		let obsTarea2=["obs8","obs9","obs10","obs11","obs12","obs13","obs14","obs15","obs16","obs17","obs18","obs19","obs20"];
	for(let I=0;I< obsTarea2.length ;++I){

const obsatualID= document.getElementById(obsTarea2[I]);
const obsatual = obsatualID.getBoundingClientRect();
     posiUsuario = Usuario.getBoundingClientRect();

		if (
        posiUsuario.right >=obsatual.left &&
        posiUsuario.bottom >= obsatual.top &&
        posiUsuario.left <= obsatual.right &&
        posiUsuario.top <= obsatual.bottom
    ) {
		resultado=false;
		break;
	}
	}
break;
	
case 3:
		let obsTarea3=["obs21","obs22","obs23","obs24","obs25","obs26","obs27","obs28","obs29","obs30","obs31","obs32","obs33","obs34","obs35","obs38especialra","obs36especial","obs37"];
	for(let I=0;I< obsTarea3.length;++I){

	const obsatualID= document.getElementById(obsTarea3[I]);
	const obsatual = obsatualID.getBoundingClientRect();
     posiUsuario = Usuario.getBoundingClientRect();
	
	if(obsatualID === obs36especial && 
		posiUsuario.right >=obsatual.left)
	{
		let ray = document.getElementById('ray');
		ray.classList.remove('raio');
		ray.classList.add('raio2');
		
	}
	else if(
        posiUsuario.right >=obsatual.left &&
        posiUsuario.bottom >= obsatual.top &&
        posiUsuario.left <= obsatual.right &&
        posiUsuario.top <= obsatual.bottom
		) {
		resultado=false;
		break;
	}
	}
break;
case 4:
	let obsTarea4=["obs39","obs40"];
	for(let I=0;I < obsTarea4.length;++I){

const obsatualID= document.getElementById(obsTarea4[I]);
const obsatual = obsatualID.getBoundingClientRect();
     posiUsuario = Usuario.getBoundingClientRect();

		if ( posiUsuario.right >=obsatual.right ) {
		ganhou=true;
		break;
			}
	else if (
        posiUsuario.right >=obsatual.left &&
        posiUsuario.bottom >= obsatual.top &&
        posiUsuario.left <= obsatual.right &&
        posiUsuario.top <= obsatual.bottom
    ) {
		resultado=false;
		break;
	}
	}
		finalizarjogo();
break;
}
	}},100);
}
function falapause(){
		setInterval(function(){

if(!pauseplay){
	window.onload =function(){
	letra.innerHTML="jogo pausado";
	}
}
},100);
}
function colidiu(){
		setInterval(function(){
if(!resultado){
	pauseplay =false;
	finalizarjogo();
}
},100);
}
function escapetela(){
setInterval(function(){

if(pauseplay){
	const posiUsuario = Usuario.getBoundingClientRect();
    const positela1 = tela.getBoundingClientRect();
     barreira = muro.getBoundingClientRect();
let botty;
     if (posiUsuario.bottom >= positela1.bottom ){
  botty = positela1.bottom+1;
  Usuario.style.bottom = botty + "px";
    }else if(posiUsuario.top <= positela1.top){
	topU = positela1.top+1;
  Usuario.style.top = topU + "px";
	}
	
    else if(posiUsuario.left <= positela1.left){
	leftU -=2;
	Usuario.style.left=leftU +"px";
	}
    else if(posiUsuario.right >= positela1.right){
	leftU +=2;
	Usuario.style.left=leftU +"px";
	}
}
},100);
}
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function limii(){
	setInterval(function(){
		if(posiUsuario.right >= barreira.left){
		limite = !limite;
	}},100);
	
}
 async function finalizarjogo(){
	  await delay(2000);
	if(ganhou){
			pauseplay =false;
	menudeResultado.style.left="5%";
	telaPReta.style.left="0.5%";
	result22.style.color="green";
	result22.innerHTML="Você ganhou! Parabéns!";
	}
	else if(!resultado){
	menudeResultado.style.left="5%";
	telaPReta.style.left="0.5%";

	}
}
