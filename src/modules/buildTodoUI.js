import { forEach } from 'lodash';
import { todoListArray } from './todoListArray.js';
import updateArrIndex from './updateArrayIndex.js';

const buildTodoUI = () => {
  updateArrIndex();
  const listUI = document.querySelector('.lists');
  listUI.innerHTML = '';

  forEach(todoListArray, (todo) => {
    listUI.innerHTML += `
    <li>
      <input class="task" type="checkbox" id="item-${todo.index}" name="item-${todo.index}">
      <label for="item-${todo.index}">${todo.discription}</label>
    </li>
    <hr>
  `;
  });
};

export default buildTodoUI;
