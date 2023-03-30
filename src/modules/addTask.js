import buildTodoUI from './buildTodoUI.js';
import { saveList, todoListArray } from './todoListArray.js';
import clearAllCompleted from './clearAllCompleted.js';

const addTaskFunc = (index, completed = false, discription) => {
  const input = document.querySelector('#type-here');
  input.addEventListener('keypress', (e) => {
    if (input.value !== '' && e.key === 'Enter') {
      discription = input.value;
      index = todoListArray.length + 1;
      todoListArray.push({ index, completed, discription });
      buildTodoUI();
      clearAllCompleted();
      saveList();
      input.value = '';
    }
  });
};

export default addTaskFunc;
