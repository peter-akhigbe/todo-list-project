/* eslint-disable import/no-cycle */
import { todoListArray, allFuncs } from '../script.js';
import deleteTask from './deleteTask.js';

const editTask = () => {
  const dots = document.querySelectorAll('.dots');

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const list = dot.parentNode;
      const label = dot.parentNode.querySelector('label');
      const input = document.createElement('input');
      const index = list.id.split('-')[1];
      if (list.children[1].tagName === 'LABEL') {
        dot.innerHTML = `<span class="delete" id="delete-${index}">🗑️</span>`;
        dot.style.transform = 'rotate(0deg)';
        input.type = 'text';
        list.replaceChild(input, label);
        input.value = label.textContent;
        list.style.backgroundColor = 'rgb(242, 236, 192)';
        input.style.backgroundColor = 'rgb(242, 236, 192)';
        input.focus();
        deleteTask();
        // starts here
        input.addEventListener('keypress', (e) => {
          if (input.value !== '' && e.key === 'Enter') {
            todoListArray[index - 1].discription = input.value;
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
