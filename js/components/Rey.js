import Personaje from "./Personaje.js";

class Rey extends Personaje {
  anyosReinado;

  constructor(nombreRey, familiaRey, edad, anyosReinadoRey) {
    super(nombreRey, familiaRey, edad);
    this.anyosReinado = anyosReinadoRey;
  }

  comunicar() {
    return `${super.comunicar()}Vais a morir todos`;
  }
}

export default Rey;
