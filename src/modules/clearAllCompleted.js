/* eslint-disable import/no-cycle */
import { todoListArray, allFuncs } from '../script.js';

const clearAllCompleted = () => {
  const checker = () => {
    const checkboxes = [...document.querySelectorAll('.task')];

    if (checkboxes) {
      checkboxes.forEach((checkbox, i) => {
        checkbox.addEventListener('change', (e) => {
          const taskText = checkbox.parentElement.querySelector('label');
          if (e.target.checked) {
            todoListArray[i].completed = true;
            taskText.style['text-decoration'] = 'line-through';
          } else {
            todoListArray[i].completed = false;
            taskText.style['text-decoration'] = 'none';
          }
        });
      });
    }
  };

  const clearing = () => {
    const clearBtn = document.querySelector('h2');
    clearBtn.addEventListener('click', () => {
      for (let i = todoListArray.length - 1; i >= 0; i -= 1) {
        if (todoListArray[i].completed === true) {
          todoListArray.splice(i, 1);
        }
      }
      allFuncs();
    });
  };

  checker();
  clearing();
};

export default clearAllCompleted;
