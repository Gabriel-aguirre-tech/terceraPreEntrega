
//constantes y funciones para dar comienzo a la cotizacion pidiendo datos por Prompt mediante click en button "cotizar"
const cotiza = document.getElementById('cotiza');

cotiza.addEventListener('click', cotizar);

function calcularPrecioPeso(productos) {
    for(i=0;i<productos.length;i++) {
        if(productos[i].peso <= 5){
            productos[i].precioPeso = 0;
        } else if (productos[i].peso > 5 && productos[i].peso <= 10){
            productos[i].precioPeso = 100;
        } else if (productos[i].peso > 10 && productos[i].peso <= 20){
            productos[i].precioPeso = 200;
        } else {
            productos[i].precioPeso = 0;
        }
    }
}

function calcularPrecioDimension(productos) {
    for(i=0;i<productos.length;i++) {
        switch(productos[i].dimension) {
            case "chico":
                productos[i].precioDimension = 0;
                break;
            case "mediano":
                productos[i].precioDimension = 100;
                break;
            case "grande":
                productos[i].precioDimension = 200;
                break;
            default:
                productos[i].precioDimension = 0;
                break;
        }
    };
}

function calcularPrecioZona(productos) {
    for(i=0;i<productos.length;i++) {
        switch(productos[i].destino) {
            case "zona1":
                productos[i].precioZona = 0;
                break;
            case "zona2":
                productos[i].precioZona = 250;
                break;
            case "zona3":
                productos[i].precioZona = 450;
                break;
            default:
                productos[i].precioZona = 0;
                break;
        }
    };
}

function calcularPrecioBase(productos) {
    for(i=0;i<productos.length;i++) {
        if(productos[i].peso == "Opciones..." || productos[i].destino == "Opciones..." || productos[i].dimension == "Opciones..." || productos[i].nombre == ""){
            productos[i].precioBase = 0;
        }
    };
}

function crearProducto(nombre, dimension, peso, destino) {
    let obj = {};
    obj.nombre = nombre;
    obj.dimension = dimension;
    obj.peso = peso;
    obj.destino = destino;
    obj.precioBase = 500,
    obj.precioDimension=0,
    obj.precioZona=0,
    obj.precioTotal=0;

    return obj;
}

//funcion para realizar la simulacion 
function cotizar() {
    //declaracion de variables para la simulacion
    let productos = [];
    let cantidad = 3;
    cantidadPaquetes = cantidad;

    let producto = crearProducto(
        document.getElementById("nombre").value,
        document.getElementById("inputDimension").value,
        document.getElementById("inputPeso").value,
        document.getElementById("inputDestino").value
    );
    productos.push(producto);

    let producto1 = crearProducto(
        document.getElementById("nombre1").value,
        document.getElementById("inputDimension1").value,
        document.getElementById("inputPeso1").value,
        document.getElementById("inputDestino1").value
    );
    productos.push(producto1);

    let producto2 = crearProducto(
        document.getElementById("nombre2").value,
        document.getElementById("inputDimension2").value,
        document.getElementById("inputPeso2").value,
        document.getElementById("inputDestino2").value
    );
    productos.push(producto2);

    calcularPrecioPeso(productos);
    calcularPrecioDimension(productos);
    calcularPrecioZona(productos);
    calcularPrecioBase(productos);

    //bucle for para sumar el total de cada producto
    for(i=0;i<productos.length;i++){
        productos[i].precioTotal = productos[i].precioBase + productos[i].precioDimension + productos[i].precioZona + productos[i].precioPeso;
    };
    console.log(productos);


    //bucle for para sumar todos los precios de los productos y hacer un precio final
    let precioFinal = 0;
    for(i=0;i<productos.length;i++){
        precioFinal = precioFinal + productos[i].precioTotal;
    };

    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "El precio final por todos sus envios es de " + "$" + precioFinal;

    // console.log(precioFinal);
}