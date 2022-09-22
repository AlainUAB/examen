function iniciar_sesion() {
	var  nombre = document.getElementById("usuario").value;
	if(nombre != ""){
		document.getElementById("demo").innerHTML = "Bienvenido(a) "+ nombre;
	}
	else{
		document.getElementById("demo").innerHTML = "Error , debe ingresar su nombre ";
	}
}

function bolivianos() {
	var  monto = Number(window.prompt("Ingrese el monto en Dólares"));
	if (!isNaN(monto) && (monto != "")) {
		alert(+monto+ " USD equivale a " +monto*6.96 +" Bs.");
	}
	else{
		alert("Error, debe ingresar un número válido.");
	}
	
}

function dolares() {
	var  monto = Number(window.prompt("Ingrese el monto en Bolivianos"));
	if (!isNaN(monto) && (monto != "")) {
		var conversion = monto/6.96;
		alert(+monto+ " Bs. equivale a "+conversion.toFixed(2) +" USD.");
	}
	else{
		alert("Error, debe ingresar un número válido.");
	}
	
}