import { todoListArray } from './todoListArray.js';

const updateArrIndex = () => {
  todoListArray.forEach((todo, i) => {
    todo.index = i + 1;
  });
};

export default updateArrIndex;
