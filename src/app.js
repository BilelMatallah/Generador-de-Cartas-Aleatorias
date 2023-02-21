/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.addEventListener("load", function() {
  document.querySelector(".card").classList.add(simboloRandom());
  document.querySelector(".card").innerHTML = numeroRandom();
});

let numeroRandom = () => {
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumeros = Math.floor(Math.random() * numeros.length);
  return numeros[indexNumeros];
};

let simboloRandom = () => {
  let simbolos = ["spade", "club", "heart", "diam"];
  let indexsimbolos = Math.floor(Math.random() * simbolos.length);
  return simbolos[indexsimbolos];
};
