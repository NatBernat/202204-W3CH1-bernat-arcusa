import Component from "./Component.js";
import Rey from "./Rey.js";
import Luchador from "./Luchador.js";

class Ficha extends Component {
  constructor(parentElement, personaje, nameClass) {
    super(parentElement, "li", "character col");
    this.class = nameClass;
    this.personaje = personaje;

    this.render(personaje);
  }

  render() {
    this.element.innerHTML = `
    <div class="card character__card">
            <img
            src="img/${this.personaje.nombre}.jpg"
            alt="${this.personaje.nombre} ${this.personaje.familia}"
            class="character__picture card-img-top"
          />
            <div class="card-body">
              <h2 class="character__name card-title h4">${
                this.personaje.nombre
              } ${this.personaje.familia}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${this.personaje.edad} años</li>
                  <li>
                    Estado:
                    ${
                      this.personaje.vivo
                        ? '<i class="fas fa-thumbs-up"></i>'
                        : '<i class="fas fa-thumbs-down"></i>'
                    }
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  ${
                    this.personaje instanceof Rey
                      ? `<li>Años de reinado: ${this.personaje.anyosReinado}</li>`
                      : ""
                  }
                  ${
                    this.personaje instanceof Luchador
                      ? `<li>Arma: ${this.personaje.arma}</li>`
                      : ""
                  }
                  <li>Destreza: X</li>
                  <li>Peloteo: X</li>
                  <li>Asesora a: X</li>
                  <li>Sirve a: X</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>
          `;
  }
}

export default Ficha;
