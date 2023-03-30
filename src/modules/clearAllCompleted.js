/* eslint-disable import/no-cycle */
import { todoListArray, allFuncs } from '../script.js';

const clearAllCompleted = () => {
  const checker = () => {
    const checkboxes = [...document.querySelectorAll('.task')];

    if (checkboxes) {
      checkboxes.forEach((checkbox, i) => {
        checkbox.addEventListener('change', (e) => {
          if (e.target.checked) {
            todoListArray[i].completed = true;
          } else {
            todoListArray[i].completed = false;
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
      console.log(todoListArray);
    });
  };

  checker();
  clearing();
};

export default clearAllCompleted;
