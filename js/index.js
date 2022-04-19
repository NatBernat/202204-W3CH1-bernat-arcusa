/* eslint-disable no-new */
import personajes from "./components/personajes.js";
import Ficha from "./components/Ficha.js";

const listContainer = document.querySelector(
  ".characters-list.row.list-unstyled"
);

personajes.forEach((personaje) => {
  new Ficha(listContainer, personaje, "character col");
});
