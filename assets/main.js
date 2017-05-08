
function MiembroSquad (nombreCompleto, edad, hobbies){
	this.nombreCompleto = nombreCompleto;
	this.edad = edad;
	this.hobbies = hobbies;

}

var carolina = new MiembroSquad("Carolina Quintana", 31, ["Patinar", "Comer sushi", "Acariciar a sus gatos"] );
var josefa = new MiembroSquad("Josefa Herrera", 20, ["Bailar pop", "Ver series", "Codear"]);
var maibeet = new MiembroSquad("Maibeet Torres", 24, ["Jugar RPG", "Leer", "Andar en bici"]);
var muriel = new MiembroSquad("Muriel Bahamondes", 25, ["Fumar hierba", "Jugar pool", "Navegar en internet"]);
var anayn = new MiembroSquad("Anayn Pavez", 27, ["Dibujar", "Pastelería", "Andar en bici"]);
var anais = new MiembroSquad("Anais Araya",20, ["Estar con Amelia", "Ver Netflix", "Estar con mi pareja"]);
var simona = new MiembroSquad("Simona Ulloa", 22, ["Ver Netflix", "Escuchar música", "Tomar chelas"]);
var dulce = new MiembroSquad("Dulce Frau", 25, ["Cocinar", "Leer", "Subir montañas"]);


//Añadiendo un título
var elemento = document.createElement("h2");
var contenido = document.createTextNode("A-TÓ-MI-CO SQUAD");
elemento.appendChild(contenido);
elemento.setAttribute("align", "center");
document.getElementById("titulo").appendChild(elemento);



//Añadiendo a cada div los datos


var divcarolina = document.getElementById("carolinaq").innerHTML += "<strong>Nombre Completo: </strong>" + carolina.nombreCompleto + "<br><strong> Edad: </strong>" + carolina.edad + " años" + "<br><strong> Hobbies: </strong><li>" + carolina.hobbies + "</li>"; 
var divjosefa = document.getElementById("josefah").innerHTML += "<strong>Nombre Completo: </strong>" + josefa.nombreCompleto + "<br><strong> Edad: </strong>" + josefa.edad + " años" + "<br><strong> Hobbies: </strong><li>" + josefa.hobbies + "</li>"; 
var divmaibett = document.getElementById("maibeett").innerHTML += "<strong>Nombre Completo: </strong>" + maibeet.nombreCompleto + "<br><strong> Edad: </strong>" + maibeet.edad + " años" + "<br><strong> Hobbies: </strong><li>" + maibeet.hobbies + "</li>"; 
var divmuriel = document.getElementById("murielb").innerHTML += "<strong>Nombre Completo: </strong>" + muriel.nombreCompleto + "<br><strong> Edad: </strong>" + muriel.edad + " años" + "<br><strong> Hobbies: </strong><li>" + muriel.hobbies + "</li>"; 
var divanayn = document.getElementById("anaynp").innerHTML += "<strong>Nombre Completo: </strong>" + anayn.nombreCompleto + "<br><strong> Edad: </strong>" + anayn.edad + " años" + "<br><strong> Hobbies: </strong><li>" + anayn.hobbies + "</li>"; 
var divanais = document.getElementById("anaisa").innerHTML += "<strong>Nombre Completo: </strong>" + anais.nombreCompleto + "<br><strong> Edad: </strong>" + anais.edad + " años" + "<br><strong> Hobbies: </strong><li>" + anais.hobbies + "</li>"; 
var divsimona = document.getElementById("simonau").innerHTML += "<strong>Nombre Completo: </strong>" + simona.nombreCompleto + "<br><strong> Edad: </strong>" + simona.edad + " años" + "<br><strong> Hobbies: </strong><li>" + simona.hobbies + "</li>"; 
var divdulce = document.getElementById("dulcef").innerHTML += "<strong>Nombre Completo: </strong>" + dulce.nombreCompleto + "<br><strong> Edad: </strong>" + dulce.edad + " años" + "<br><strong> Hobbies: </strong><li>" + dulce.hobbies + "</li>"; 



//Rescatar el comentario del usuario
function rescateComentario() {
	var nombrecomentario = document.getElementById("comentario");
	
	var reflejarcomentario = document.getElementById("coment");
	reflejarcomentario.innerHTML += nombrecomentario.value;
	nombrecomentario.value = " ";	
}

//Insertar una imagen Caro
var img = new Image();
var div = document.getElementById("contenedor-fotocaro");

img.onload = function() {
  div.innerHTML += '<img src="'+'images/caro.png'+'" />';
};

img.src = 'images/caro.png';




















