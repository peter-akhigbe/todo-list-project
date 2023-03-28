import { forEach } from 'lodash';
import './style.css';

const listUI = document.querySelector('.lists');

const todoArr = [
  {
    index: 0,
    completed: false,
    discription: 'wash the dishes',
  },
  {
    index: 1,
    completed: false,
    discription: 'check match time',
  },
  {
    index: 2,
    completed: false,
    discription: 'go live on instagram',
  },
];

todoArr.forEach((todo, i) => {
    listUI.innerHTML += `
    <li>
      <input type="checkbox" id="item-${i}" name="item-${i}">
      <label for="item-${i}">${todo.discription}</label>
    </li>
    <hr>
    `;
})

console.log("hoe");
