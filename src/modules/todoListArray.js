const TODO_KEY = 'todo-list';

const todoListArray = JSON.parse(localStorage.getItem(TODO_KEY)) || [
  // {
  //   index: 1,
  //   completed: false,
  //   discription: '1: string',
  // },
  // {
  //   index: 2,
  //   completed: false,
  //   discription: '2: string',
  // },
  // {
  //   index: 3,
  //   completed: false,
  //   discription: '3: string',
  // },
];

const saveList = () => {
  localStorage.setItem(TODO_KEY, JSON.stringify(todoListArray));
};

export { saveList, todoListArray };
