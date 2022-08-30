// FUNCIONES

// DECLARACION

// Tradicionales
function miFuncion() {
	console.log('Mensajito0');
	return 'Ejecutada';
};

// Anónimas
const funcionAnonima = function() {
	alert('Mensajito');
};

// Funciones Flecha
const funcionFlecha = () => {
	console.log('Mensajito2');
	alert('Mensajito2');
};

// INVOCACION O LLAMADA A LAS FUNCIONES
alert(miFuncion());
funcionAnonima();
funcionFlecha();

// RETURN
const funcionFlecha2 = () => {
	let saludo = 'Hola';
	console.log('Fucion Flecha Ejecutada');
	return saludo;
}

alert(funcionFlecha2());

// ARGUMENTOS

let numeros //scope global

const suma = (x,y) => {
	numeros = x+y; //scope de la función
	let mensaje = 'Que tal?';
	return mensaje;
}

console.log(numeros);
console.log(suma());

// Ejemplo de Aplicación

let authorize;

const validate = () => {
	authorize = prompt('Desea validar su permiso para conducir?' +
	'\n 1 - SI' +
	'\n 2 - NO'
	);
}

validate();

const manejar = (age, name) => {
	if(age > 16) {
		return `${name}, usted puede Manejar`;
	} 	else {
		return`${name}, usted NO puede Manejar`;
	};
}

while(authorize == '1') {

	let nameprompt = prompt('Ingrese su nombre:')
	let ageprompt = parseInt(prompt('Ingrese su edad:'));

	alert(manejar(ageprompt, nameprompt));
	/* alert(manejar(29, 'Fede'));
	alert(manejar(29,'Aminta')); */
	
	validate();
}

alert('Gracias por utilizar el validador')















