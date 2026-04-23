import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  function generarExcusa() {
    let i = Math.floor(Math.random() * who.length);
    let j = Math.floor(Math.random() * action.length);
    let k = Math.floor(Math.random() * what.length);
    let l = Math.floor(Math.random() * when.length);

    return who[i] + " " + action[j] + " " + what[k] + " " + when[l];
  }

  document.querySelector("#excuse").innerHTML = generarExcusa();

  console.log("Excusa generada correctamente");
};