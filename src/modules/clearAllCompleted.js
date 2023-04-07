const clearAllCompleted = (obj) => {
  const checker = () => {
    const checkboxes = [...document.querySelectorAll('.task')];

    if (checkboxes) {
      checkboxes.forEach((checkbox, i) => {
        checkbox.addEventListener('change', () => {
          const taskText = checkbox.parentElement.querySelector('label');
          if (checkbox.checked === true) {
            obj.todoListArray[i].completed = true;
            taskText.style['text-decoration'] = 'line-through';
            obj.saveList();
          } else {
            obj.todoListArray[i].completed = false;
            taskText.style['text-decoration'] = 'none';
            obj.saveList();
          }
        });
      });
    }
  };

  const clearing = () => {
    const clearBtn = document.querySelector('h2');

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        for (let i = obj.todoListArray.length - 1; i >= 0; i -= 1) {
          if (obj.todoListArray[i].completed === true) {
            obj.todoListArray.splice(i, 1);
          }
        }
        obj.allFuncs();
      });
    }
  };

  checker();
  clearing();
};

export default clearAllCompleted;
