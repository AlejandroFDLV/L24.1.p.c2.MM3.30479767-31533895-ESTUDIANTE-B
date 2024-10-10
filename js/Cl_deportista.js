import Cl_estudiante from "./Cl_estudiante.js";
export default class Cl_deportista extends Cl_estudiante {
    constructor(nombre, acumNotas, cntMaterias, equipo, edad) {
        super(nombre, acumNotas, cntMaterias);
        this.equipo = equipo;
        this.edad = edad;
    }
    admitido() {
        if (this.equipo == 1) {
            if (this.promedio() >= 14 && this.edad >= 21) {
                return "Beisbol";
            } else { return "no es admitido en Beisbol";}

        } else if (this.equipo == 2) {
            if (this.promedio() >= 12 && this.edad >= 19) {
                return "Futbol";
            } else { return "no es admitido en futbol" };
        } 
    }
}