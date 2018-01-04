import Man from "./Man";
import '../css/style.scss';
import 'reset-css';

let johnny = new Man('Johnny', 'Google');

let dummyText = document.querySelector('.dummy-text');

dummyText.textContent = `My name is ${johnny.getName()}, and I work at ${johnny.getWorkplace()}`;