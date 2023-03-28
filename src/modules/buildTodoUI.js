import { forEach } from 'lodash';
import todoArr from './todoArr.js';

const buildTodoUI = () => {
  const listUI = document.querySelector('.lists');

  forEach(todoArr, (todo, i) => {
    listUI.innerHTML += `
    <li>
      <input type="checkbox" id="item-${i}" name="item-${i}">
      <label for="item-${i}">${todo.discription}</label>
    </li>
    <hr>
  `;
  });
};

export default buildTodoUI;
