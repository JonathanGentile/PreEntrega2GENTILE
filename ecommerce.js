let total = 0;

// Mensaje de bienvenida y validacion de nombre
let nombreUsuario = prompt("Bienvenido al E-commerce de Equipamientos LOW - COST!, ¡Por favor indiquenos su nombre!");
while (nombreUsuario == "") {
    alert("Nombre invalido");
    nombreUsuario = prompt("Ingresa tu nombre");
}
alert("Bienvenido/a " + nombreUsuario);

let catalogo = [{
        id: 1,
        nombre: "Balanza systel 30kg",
        foto: "./images/balanza.jpg",
        descripcion: "Balanza systel chroma, aguanta hasta 30kg de peso y viene con torre",
        precio: 57000
    },
    {
        id: 2,
        nombre: "Cortadora de fiambre moretti 300mm",
        foto: "./images/moretti.png",
        descripcion: "Cortadora de fiambres moretti trecento, tiene un radio de disco de corte de 300mm, ideal comercios",
        precio: 165000
    },
    {
        id: 3,
        nombre: "Freezer teora FH 550",
        foto: "./images/FH550.png",
        descripcion: "Freezer doble puerta con capacida de 452 Litros, con cerradura para sus puertas",
        precio: 230000
    },
    {
        id: 4,
        nombre: "Vitrina mostrador",
        foto: "./images/vitrina.png",
        descripcion: "Vitrina mostrador ideal para fiambres, medidas 1,20mts. 1,60mts. 2,00mts",
        precio: 450000
    },
    {
        id: 5,
        nombre: "Panchera ROA",
        foto: "./images/panchera roa.jpg",
        descripcion: "Panchera roa con capacidad para 30 superpanchos, con bandeja para calentar pan y pinzas",
        precio: 58000
    },
];

let mensaje = prompt("¿Desea comprar un producto de nuestro catalogo? (s- SI / n- NO) ");

//Inicio de ciclo
while (mensaje == "s" || mensaje == "S") {
    let productos = "";
    for (let producto of catalogo) {
        productos += producto.id + " - " + producto.nombre + "\n";
    }

    let productoElegido = prompt("Seleccione el producto que desea comprar: \n\n" + productos);

    let producto = catalogo.find(p => p.id == productoElegido);

    if (producto) {
        alert("Agregaste " + producto.nombre + " al carrito de compras. Valor $" + producto.precio);
        incrementarTotal(producto.precio);
    } else {
        alert("¡Articulo inexistente!");
    }

    mensaje = prompt("¿Desea comprar un producto de nuestro catalogo? (s- SI / n- NO) ");
}

//Funcion para calcular el total
alert("Total de la compra $" + total);

function incrementarTotal(precio) {
    total = total + precio;
    console.log("Llevas gastado $" + total);
}

//Metodo para filtrar precios por debajo de 100000
let productosFiltrados = catalogo.filter(producto => producto.precio < 100000);
console.table(productosFiltrados);

let terminoBusqueda = prompt("Ingrese el término de búsqueda:");
let resultados = [];


//Metodo para realizar una busqueda
for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        resultados.push(catalogo[i]);
    }
}

if (resultados.length > 0) {
    alert("Se encontraron los siguientes resultados:\n\n" + resultados.map(producto => producto.nombre).join("\n"));
} else {
    alert("No se encontraron resultados para la búsqueda: " + terminoBusqueda);
}