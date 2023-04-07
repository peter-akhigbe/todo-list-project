const addTaskFunc = (obj, taskObj = {}) => {
  const input = document.querySelector('#type-here');

  if (input) {
    input.addEventListener('keypress', (e) => {
      // const taskObj = {};

      if (input.value !== '' && e.key === 'Enter') {
        taskObj.index = obj.todoListArray.length + 1;
        taskObj.completed = false;
        taskObj.discription = input.value;
        obj.todoListArray.push({ ...taskObj });
        input.value = '';
        obj.allFuncs();
      }
    });
  }
};

export default addTaskFunc;
