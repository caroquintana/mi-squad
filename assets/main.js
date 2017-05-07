var hobbies = [];

function MiembroSquad (nombreCompleto, edad, hobbies){
	this.nombreCompleto = nombreCompleto;
	this.edad = edad;
	this.hobbies = hobbies;

}

var carolina = new MiembroSquad("Carolina Quintana", 31, "Patinar, Comer sushi, Acariciar a sus gatos" );
var josefa = new MiembroSquad("Josefa Herrera", 20, "Bailar pop, Ver series, Codear");
var maibeet = new MiembroSquad("Maibeet Torres", 24, "Jugar RPG, Leer, Andar en bici");
var muriel = new MiembroSquad("Muriel Bahamondes", 25, "Fumar hierba, Jugar pool, Navegar en internet");
var anayn = new MiembroSquad("Anayn Pavez", 27, "Dibujar, Pastelería, Andar en bici");
var anais = new MiembroSquad("Anais Araya",20, "Estar con Amelia, Ver Netflix, Estar con mi pareja");
var simona = new MiembroSquad("Simona Ulloa", 22, "Ver Netflix, Escuchar música, Tomar chelas");
var dulce = new MiembroSquad("Dulce Frau", 25, "Cocinar, Leer, Subir montañas");


//Añadiendo un título
var elemento = document.createElement("h2");
var contenido = document.createTextNode("A-TÓ-MI-CO Squad");
elemento.appendChild(contenido);
elemento.setAttribute("align", "center");
document.getElementById("titulo").appendChild(elemento);



//Añadiendo a cada div los datos


var divcarolina = document.getElementById("carolinaq").innerHTML = "Nombre Completo: " + carolina.nombreCompleto + "<br> Edad: " + carolina.edad + " años" + "<br> Hobbies: " + carolina.hobbies; 
var divjosefa = document.getElementById("josefah").innerHTML = "Nombre Completo: " + josefa.nombreCompleto + "<br> Edad: " + josefa.edad + " años" + "<br> Hobbies: " + josefa.hobbies; 
var divmaibett = document.getElementById("maibeett").innerHTML = "Nombre Completo: " + maibeet.nombreCompleto + "<br> Edad: " + maibeet.edad + " años" + "<br> Hobbies: " + maibeet.hobbies; 
var divmuriel = document.getElementById("murielb").innerHTML = "Nombre Completo: " + muriel.nombreCompleto + "<br> Edad: " + muriel.edad + " años" + "<br> Hobbies: " + muriel.hobbies; 
var divanayn = document.getElementById("anaynp").innerHTML = "Nombre Completo: " + anayn.nombreCompleto + "<br> Edad: " + anayn.edad + " años" + "<br> Hobbies: " + anayn.hobbies; 
var divanais = document.getElementById("anaisa").innerHTML = "Nombre Completo: " + anais.nombreCompleto + "<br> Edad: " + anais.edad + " años" + "<br> Hobbies: " + anais.hobbies; 
var divsimona = document.getElementById("simonau").innerHTML = "Nombre Completo: " + simona.nombreCompleto + "<br> Edad: " + simona.edad + " años" + "<br> Hobbies: " + simona.hobbies; 
var divdulce = document.getElementById("dulcef").innerHTML = "Nombre Completo: " + dulce.nombreCompleto + "<br> Edad: " + dulce.edad + " años" + "<br> Hobbies: " + dulce.hobbies; 


























