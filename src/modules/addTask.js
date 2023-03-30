/* eslint-disable import/no-cycle */
import { todoListArray } from './todoListArray.js';
import allFuncs from '../script.js';

const addTaskFunc = (index, completed = false, discription) => {
  const input = document.querySelector('#type-here');
  input.addEventListener('keypress', (e) => {
    if (input.value !== '' && e.key === 'Enter') {
      discription = input.value;
      index = todoListArray.length + 1;
      todoListArray.push({ index, completed, discription });
      input.value = '';
      allFuncs();
    }
  });
};

export default addTaskFunc;
