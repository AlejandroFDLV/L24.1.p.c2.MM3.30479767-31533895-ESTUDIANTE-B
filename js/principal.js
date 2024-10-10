import Cl_deportista from "./Cl_deportista.js";
let deportista1 = new Cl_deportista("Juan", 132, 8, 1, 21);
let deportista2 = new Cl_deportista("Felix", 110, 10, 2, 20);

let mostrarDeportista = (deportista) => {
    return `
        Nombre del estudiante: ${deportista.nombre}
        <br> 
        Acumulado de notas: ${deportista.acumNotas}
        <br> 
        Cantidad de materias: ${deportista.cntMaterias}
        <br>
        Deporte (1=beisbol - 2=fútbol): ${deportista.equipo}
        <br>
        Edad: ${deportista.edad}
        <br>
        Nota promedio: ${deportista.promedio()}
        <br> 
        ${deportista.nombre} es admitido en ${deportista.admitido()}      
    `;
}
    let salida = document.getElementById("Salida");
    salida.innerHTML += `
    ${mostrarDeportista(deportista1)}
    <br>
    <br>
    ${mostrarDeportista(deportista2)}
    `;