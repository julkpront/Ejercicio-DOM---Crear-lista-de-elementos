const listado = document.getElementById("lista");
const creaelemento = document.createElement("li");
const createxto = document.createTextNode("Tarea importante");

creaelemento.appendChild(createxto);
listado.appendChild(creaelemento);

const tareas = ["comprar", "barrer", "alimentar gato", "colada"];

for (let i = 0; i < tareas.length; i++) {
    
    const creaelemento = document.createElement("li");
    const createxto = document.createTextNode(tareas[i]);

    creaelemento.appendChild(createxto);
    listado.appendChild(creaelemento);
    
}