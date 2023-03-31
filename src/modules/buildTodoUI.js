/* eslint-disable import/no-cycle */
import { forEach } from 'lodash';
import { todoListArray, saveList } from '../script.js';

const buildTodoUI = () => {
  const updateArrIndex = () => {
    todoListArray.forEach((todo, i) => {
      todo.index = i + 1;
    });
  };

  updateArrIndex();

  const listUI = document.querySelector('.lists');
  listUI.innerHTML = '';

  forEach(todoListArray, (todo) => {
    const tick = todo.completed === true ? 'checked' : '';
    listUI.innerHTML += `
    <li class="list" id="list-${todo.index}">
      <input class="task" id="item-${todo.index}" type="checkbox" ${tick} name="item-${todo.index}">
      <label for="item-${todo.index}" id="label-${todo.index}">${todo.discription}</label>
      <span class="dots" id="dot-${todo.index}">...</span>
    </li>
    <hr>
  `;

    const input = document.querySelector(`#item-${todo.index}`);
    const label = document.querySelector(`#label-${todo.index}`);

    if (input.checked === true) {
      label.style['text-decoration'] = 'line-through';
    }
  });

  saveList();
};

export default buildTodoUI;
