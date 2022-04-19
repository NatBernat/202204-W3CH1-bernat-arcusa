import Personaje from "./Personaje.js";

class Luchador extends Personaje {
  arma;
  destreza;

  constructor(
    nombreLuchador,
    familiaLuchador,
    edad,
    armaLuchador,
    valorDestreza
  ) {
    super(nombreLuchador, familiaLuchador, edad);
    this.arma = armaLuchador;
    this.destreza = this.filtraDestreza(valorDestreza);
  }

  filtraDestreza(valorDestreza) {
    this.valorDestreza = valorDestreza;
    if (valorDestreza < 0) {
      return 0;
    }
    if (valorDestreza > 10) {
      return 10;
    }
    return valorDestreza;
  }

  comunicar() {
    return `${super.comunicar()}Primero pego y luego pregunto`;
  }
}
export default Luchador;
