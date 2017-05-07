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



//Añadiendo una lista desordenada
var listades = document.createElement("ul");
var listali = document.createElement("li");
var textolistanombre = document.createTextNode("Nombre Completo:");
var textoedad = document.createTextNode("Edad:");
var textohobbie = document.createTextNode("Hobbies:");

listades.appendChild(listali);
listali.appendChild(textolistanombre);
listali.appendChild(textoedad);
listali.appendChild(textohobbie);


var divcarolinaq = document.getElementById("carolinaq");
divcarolinaq.appendChild(listades);








//1.Crear el elemento
//2.Crear un nodo de texto
//3.Añadir el nodo de texto al elemento
//4.Agregar atributos al elemento
//5.Agregar el elemento al documento