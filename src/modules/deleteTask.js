/* eslint-disable import/no-cycle */
import { todoListArray, allFuncs } from '../script.js';

const deleteTask = () => {
  const deleteBtns = document.querySelectorAll('.delete');

  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = btn.id.split('-')[1];
      todoListArray.splice(index - 1, 1);
      allFuncs();
    });
  });
};

export default deleteTask;
