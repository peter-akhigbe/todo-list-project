const deleteTask = (obj) => {
  const deleteBtns = document.querySelectorAll('.delete');

  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = btn.id.split('-')[1];
      obj.todoListArray.splice(index - 1, 1);
      obj.allFuncs();
    });
  });
};

export default deleteTask;
