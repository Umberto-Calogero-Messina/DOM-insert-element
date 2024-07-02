// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// # Ejercicios

// ## Inserción de elementos en el DOM

// - Usando cualquiera de los tres HTML que te doy, haz que al hacer click en el botón se vayan añadiendo items con el texto Item 1, Item 2, Item 3,... Los item deben llevar el número correspondiente independiente de qué HTML hayas elegido

// ```html
// <button>Añadir Elementos</button>
// <ul>
//   <li>Item 1</li>
// </ul>
// ```

// ```html
// <button>Añadir Elementos</button>
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>
// ```

// ```html
// <button>Añadir Elementos</button>
// <ul></ul>
// ```

const ulAddElement = document.getElementById('ul-add');
const buttonElement = document.getElementById('button');
let itemCount = document.querySelectorAll('#ul-add li').length - 1;

const addElement = () => {
  const pElement = document.createElement('p');
  itemCount++;
  pElement.textContent = `Item ${itemCount}`;
  ulAddElement.append(pElement);
};

buttonElement.addEventListener('click', addElement);

// - Usando el input range que te doy haz un generador de encabezados. El input te permite seleccionar un número del 1 al 6, en función de cual elijas ser generará un encabezado con la etiqueta correspondiente. Si elijes un 3, al hacer click en el botón se generará un h3, si elijes un 5 un h5 y así para todos.

// ```html
// <div>
//   <label>1</label>
//   <input type="range" id="range" min="1" max="6" step="1" value="1" />
//   <button>Generar Encabezado</button>
// </div>
// ```

const rangeElement = document.getElementById('range');
const labelElement = document.getElementById('label');
const generateButton = document.getElementById('generate');
const divElement = document.getElementById('range-div');

const rangeFuntion = () => {
  labelElement.textContent = rangeElement.value;
};
const generateH = () => {
  const newHeader = document.createElement(`h${rangeElement.value}`);
  newHeader.textContent = `Encabezado h${rangeElement.value}`;
  divElement.append(newHeader);
};

rangeElement.addEventListener('input', rangeFuntion);
generateButton.addEventListener('click', generateH);

// - Haz un simulador de posts, con este HTML tienes que conseguir que se añada un post con su autor y el texto que hayas escrito dentro del contenedor de posts. Cada post debe ir dentro de un div independiente.

const sendButtonElement = document.getElementById('sendButton');
const authorElement = document.getElementById('author');
const messageElement = document.getElementById('message');
const spacePostElement = document.getElementById('postSpace');

const sendPostFunction = () => {
  event.preventDefault();

  const newDivElement = document.createElement('div');
  const newSpanElement = document.createElement('span');
  const newPElement = document.createElement('p');

  spacePostElement.append(newDivElement);
  newDivElement.append(newSpanElement);
  newDivElement.append(newPElement);

  newSpanElement.textContent = authorElement.value;
  newPElement.textContent = messageElement.value;

  console.dir(authorElement.value);
};

sendButtonElement.addEventListener('click', sendPostFunction);
// - Crea una función que genere un div con dos botones dentro. Un botón tendrá el texto 'red' y el otro el texto 'green', al hacer click en los botones debe cambiar el background-color del div al color que corresponda.
const createColorChangingDiv = () => {
  const newDivElement = document.createElement('div');
  const redButton = document.createElement('button');
  redButton.textContent = 'red';
  redButton.addEventListener('click', () => {
    newDivElement.style.backgroundColor = 'red';
  });

  const greenButton = document.createElement('button');
  greenButton.textContent = 'green';
  greenButton.addEventListener('click', () => {
    newDivElement.style.backgroundColor = 'green';
  });

  newDivElement.append(redButton, greenButton);

  document.body.append(newDivElement);
};

createColorChangingDiv();
