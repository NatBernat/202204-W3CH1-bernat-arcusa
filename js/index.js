import Rey from "./components/Rey";
import Luchador from "./components/Luchador";
import Asesor from "./components/Asesor";
import Escudero from "./components/Escudero";

const joffrey = new Rey("Joffrey", "Baratheon", 16, 2);
const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", 7);
const daenerys = new Luchador("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
const bronn = new Escudero("Bronn", "AguasNegras", 54, 0, jaime);

console.log(joffrey);
console.log(jaime);
console.log(daenerys);
console.log(tyrion);
console.log(bronn);
