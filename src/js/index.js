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
let itemCount = document.getElementById('ul-add').children.length - 1;

const addElement = () => {
  const liElement = document.createElement('li');
  itemCount++;
  liElement.textContent = `Item ${itemCount}`;
  ulAddElement.append(liElement);
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
document.body.append(document.createElement('hr'));

// ## Inserción múltiple

// - Crea una función que sea capaz de generar 25 números aleatorios y los devuelva.

const numbers = [];

const generateRandomNumbers = () => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 25; i++) {
    const randomNumbers = Math.ceil(Math.random() * 100);
    const newLi = document.createElement('li');
    newLi.textContent = randomNumbers;
    fragment.append(newLi);
    numbers.push(randomNumbers);
  }

  document.body.append(fragment);
};

generateRandomNumbers();

console.log(numbers);

document.body.append(document.createElement('hr'));

// - Crea una función que reciba los 25 números aleatorios que has creado en el ejercicio anterior y genere e inserte en el DOM 2 listas, una con números pares y otra con números impares.

const addEvenOddNumbers = () => {
  const fragmentOdd = document.createDocumentFragment();
  const fragmentEven = document.createDocumentFragment();

  for (const number of numbers) {
    const newLi = document.createElement('li');
    newLi.textContent = number;
    if (number % 2 === 0) {
      fragmentEven.append(newLi);
    } else {
      fragmentOdd.append(newLi);
    }
  }

  document.body.append(fragmentEven);
  document.body.append(document.createElement('hr'));
  document.body.append(fragmentOdd);
};

addEvenOddNumbers();
document.body.append(document.createElement('hr'));

// - Con esta estructura, crea una función que, a medida que vayas escribiendo, te ponga dentro de la lista:
//   - El texto tiene X caracteres.
//   - El texto tiene X vocales.
//   - El texto tiene X consonantes.
//   - Has introducido X espacios

const updateStats = () => {
  const textInput = document.getElementById('textInput');
  const statsList = document.getElementById('statsList');
  const charCount = document.createElement('li');
  const vowelCount = document.createElement('li');
  const consonantCount = document.createElement('li');
  const spaceCount = document.createElement('li');
  const numbersCount = document.createElement('li');

  charCount.textContent = 'El texto tiene 0 caracteres.';
  vowelCount.textContent = 'El texto tiene 0 vocales.';
  consonantCount.textContent = 'El texto tiene 0 consonantes.';
  numbersCount.textContent = 'Has introducido 0 numeros.';
  spaceCount.textContent = 'Has introducido 0 espacios.';

  const text = textInput.value;
  const charLength = text.length;
  const vowelsSet = 'aeiouáéíóúü';
  const consonantsSet = 'bcdfghjklmnpqrstvwxyz';
  const numbersSet = '0123456789';
  let vowelLength = 0;
  let consonantLength = 0;
  let spaceLength = 0;
  let numbersLength = 0;

  for (const char of text.toLowerCase()) {
    if (vowelsSet.includes(char)) {
      vowelLength++;
    } else if (consonantsSet.includes(char)) {
      consonantLength++;
    } else if (char === ' ') {
      spaceLength++;
    } else if (numbersSet.includes(char)) {
      numbersLength++;
    }
  }

  const fragment = document.createDocumentFragment();

  charCount.textContent = `El texto tiene ${charLength} caracteres.`;
  vowelCount.textContent = `El texto tiene ${vowelLength} vocales.`;
  consonantCount.textContent = `El texto tiene ${consonantLength} consonantes.`;
  numbersCount.textContent = `Has introducido ${numbersLength} numeros.`;
  spaceCount.textContent = `Has introducido ${spaceLength} espacios.`;

  fragment.append(charCount, vowelCount, consonantCount, numbersCount, spaceCount);

  statsList.textContent = '';

  statsList.append(fragment);
};

textInput.addEventListener('input', updateStats);

// - Con este HTML consigue que al introducir un número POSITIVO y MAYOR de 0 se genere la tabla de multiplicar de ese número del 0 al 10 como elementos de la lista. En el caso de que el número no sea correcto o no haya número, el botón estará desactivado.
const numberInput = document.getElementById('numberInput');
const generateMultButton = document.getElementById('generateMultButton');
const multiplicationTable = document.getElementById('multiplicationTable');

const generateMultiplicationTable = () => {
  multiplicationTable.innerHTML = '';

  const number = Number(numberInput.value);

  for (let i = 0; i <= 10; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `${number} x ${i} = ${number * i}`;
    multiplicationTable.append(listItem);
  }
};

generateMultButton.addEventListener('click', generateMultiplicationTable);

// - Con este objeto debes crear tarjetas de usuario que muestren todos los datos, el diseño es libre, lo importante es que muestren toda la información del usuario y la imagen de perfil. Crea una función que genere todas las tarjetas de usuario y las inserte en el DOM
const USERS = [
  {
    name: 'Josep Flores',
    age: 77,
    username: 'Josep85',
    email: 'Josep_Flores@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/women/24.jpg'
  },
  {
    name: 'Ricardo Rosas',
    age: 43,
    username: 'Ricardo_Rosas',
    email: 'Ricardo_Rosas22@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/57.jpg'
  },
  {
    name: 'Iván Tamayo',
    age: 40,
    username: 'tamayo87',
    email: 'Ivan_Tamayo61@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/9.jpg',
    job: 'Lead Communications Designer'
  },
  {
    name: 'Maica Villanueva',
    age: 64,
    username: 'Maica.Villanueva18',
    email: 'Maica.Villanueva1@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    name: 'Pedro Estrada',
    age: 77,
    username: 'Pedro29',
    email: 'Pedro_Estrada22@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    job: 'Central Directives Liaison'
  },
  {
    name: 'Jorge Cedillo',
    age: 33,
    username: 'Jorge_Cedillo',
    email: 'Jorge.Cedillo2@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/88.jpg'
  }
];

const createUserCard = user => {
  // Create every user in div
  const card = document.createElement('div');
  card.className = 'user-card';

  // Create profile img
  const img = document.createElement('img');
  img.src = user.profileImage;

  // Create name
  const name = document.createElement('h2');
  name.textContent = user.name;

  // Create userName
  const username = document.createElement('p');
  username.textContent = `Username: ${user.username}`;

  // Create Age
  const age = document.createElement('p');
  age.textContent = `Age: ${user.age}`;

  // Create email
  const email = document.createElement('p');
  email.textContent = `Email: ${user.email}`;

  // Create job
  const job = document.createElement('p');
  if (user.job) {
    job.textContent = `Job: ${user.job}`;
  }

  // Add all element in card Div
  card.append(img, name, username, age, email, job);

  return card;
};
const generateUserCards = () => {
  const container = document.createElement('div');
  container.id = 'userCardsContainer';
  document.body.append(container);

  USERS.forEach(user => {
    const userCard = createUserCard(user);
    container.append(userCard);
  });
};

generateUserCards();
