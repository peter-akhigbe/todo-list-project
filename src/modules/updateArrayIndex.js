/* eslint-disable import/no-cycle */
import { todoListArray } from '../script.js';

const updateArrIndex = () => {
  todoListArray.forEach((todo, i) => {
    todo.index = i + 1;
  });
};

export default updateArrIndex;
