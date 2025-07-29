/*🧠 Ejercicio 1: Agregar elementos
Crea un arreglo vacío llamado compras.
Usa push() para agregar los siguientes elementos: "pan", "leche" y "huevos".
Muestra el arreglo resultante  en html.*/

const resultado=document.getElementById("resultado"); //referencia ul
    function agregarElementoCompra(){ //valor input
        let elemento = document.getElementById("lista").value; //crear elemento HTML -->CreateElement
        let item =document.createElement("li");
        item.innerText = elemento; //<li>--InnerText--</li>
        //apenndChild inserta valor hijo en padre
        //resultado(<ul>(item(<li></li>))</ul) 
        resultado.appendChild(item);
    }
    let carrito = [];
function mostrarListaCompra(){
    const lista = document.getElementById("resultado2");
    lista.innerHTML = ""; //Limpiar antes de mostrar

    for (let i = 0; i < carrito.length; i++){
        const li = document.createElement("li");
        li.className ="list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${carrito[i]}`;
        lista.appendChild(li);
    }
}

function agregarElemento2() {
    const input = document.getElementById("lista2");
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") return;
    carrito.push(valor); // Agregar valor al final

    input.value = "";
    input.focus(); // agrega foco hacia el input

    mostrarListaCompra()
}

function eliminarUltimoElemento(){
    if (carrito.length > 0){
        carrito.pop();
    }
    mostrarListaCompra()
}
// ------------------------------------------------------------------------------------
// Ejercicio 3 y 4
let colores = []

function mostrar_lista_colores(){
    const lista = document.getElementById("resultado3");
    lista.innerHTML = "";

    for (let i = 0; i < colores.length; i++){
        const li = document.createElement("li");
        li.className ="list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${colores[i]}`;
        lista.appendChild(li);
    }
}
function agregar_inicio() {
    const input = document.getElementById("lista3");
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") {
        return;
    }; // Agregar valor al final

    colores.unshift(valor);
    input.value = "";
    input.focus(); // agrega foco hacia el input
    console.log(colores);
    mostrar_lista_colores()
}
// -------------------------------------------------------------------------------------
let colores2 = []

function mostrar_lista_colores2(){
    const lista = document.getElementById("resultado4");
    lista.innerHTML = "";

    for (let i = 0; i < colores2.length; i++){
        const li = document.createElement("li");
        li.className ="list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${colores2[i]}`;
        lista.appendChild(li);
    }
}

function agregar_inicio2() {
    const input = document.getElementById("lista4");
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") {
        return;
    }; // Agregar valor al final


    colores2.unshift(valor);
    input.value = "";
    input.focus(); // agrega foco hacia el input

    mostrar_lista_colores2()
}


function eliminar_primer_elemento(){
    if (colores2.length > 0){
        colores2.shift();
    }
    mostrar_lista_colores2()
}

//--------------------------------------------------------------------------------------------------------
/*ejercicio 5*/
let numeros =[10,20,30]
function mostrar_lista_numeros(){
    const lista = document.getElementById("resultado5");
    lista.innerHTML = "";

    for (let i = 0; i < colores.length; i++){
        const li = document.createElement("li");
        li.className ="list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${colores[i]}`;
        lista.appendChild(li);
    }
}

function agregar_inicio_ej5() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") {
        return;
    }; // Agregar valor al final

    numeros.unshift(valor);
    input.value = "";
    input.focus(); // agrega foco hacia el input
    mostrar_lista_numeros()
}

function elimina_ultimo_elemento_ej5(){
    if (numeros.length > 0){
        numeros.pop();
    }
    mostrarListaCompra()
}

function agregar_inicio_ej5() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") return;
    numeros.push(valor); // Agregar valor al final

    input.value = "";
    input.focus(); // agrega foco hacia el input
    mostrar_lista_numeros()
}

function eliminar_primer_elemento_ej5(){
    if (numeros.length > 0){
        numeros.shift();
    }
    mostrar_lista_numeros()
}
function eliminar_primer_elemento_ej5(){
    if (numeros.length > 0){
        numeros.pop();
    }
    mostrar_lista_numeros()
}
function agregar_ultimo_elemento_ej5(){
    const input = document.getElementById("lista7");
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") return;
    numeros.push(valor); // Agregar valor al final

    input.value = "";
    input.focus(); // agrega foco hacia el input
    console.log(orden)
    mostrar_lista_orden()
}
function historial(){
    const input = document.getElementById("lista7");
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") return;
    numeros.push(valor); // Agregar valor al final

    input.value = "";
    input.focus(); // agrega foco hacia el input
    mostrar_lista_orden()  
}