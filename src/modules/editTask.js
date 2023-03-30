/* eslint-disable import/no-cycle */
import { todoListArray } from './todoListArray.js';
import allFuncs from '../script.js';

const editTask = () => {
  const dots = document.querySelectorAll('.dots');

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const list = dot.parentNode;
      const label = dot.parentNode.querySelector('label');
      const input = document.createElement('input');
      input.type = 'text';

      if (list.children[1].tagName === 'LABEL') {
        list.replaceChild(input, label);
        input.value = label.textContent;
        list.style.backgroundColor = 'grey';
        input.style.backgroundColor = 'grey';
        input.focus();
        // starts here
        input.addEventListener('keypress', (e) => {
          if (input.value !== '' && e.key === 'Enter') {
            const index = list.id.split('-')[1] - 1;
            todoListArray[index].discription = input.value;
            input.value = '';
            allFuncs();
          }
        });
        // ends here
      }
    });
  });
};

export default editTask;
