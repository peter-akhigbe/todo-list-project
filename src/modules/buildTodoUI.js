/* eslint-disable import/no-cycle */
import { forEach } from 'lodash';
import { todoListArray } from '../script.js';
import updateArrIndex from './updateArrayIndex.js';

const buildTodoUI = () => {
  updateArrIndex();
  const listUI = document.querySelector('.lists');
  listUI.innerHTML = '';

  forEach(todoListArray, (todo) => {
    listUI.innerHTML += `
    <li class="list" id="list-${todo.index}">
      <input class="task" id="item-${todo.index}" type="checkbox" name="item-${todo.index}">
      <label for="item-${todo.index}">${todo.discription}</label>
      <span class="dots" id="dot-${todo.index}">...</span>
    </li>
    <hr>
  `;
  });
};

export default buildTodoUI;
