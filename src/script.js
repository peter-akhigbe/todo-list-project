/* eslint-disable import/no-cycle */
import './style.css';
import buildTodoUI from './modules/buildTodoUI.js';
import addTaskFunc from './modules/addTask.js';
import clearAllCompleted from './modules/clearAllCompleted.js';
import editTask from './modules/editTask.js';
import { saveList } from './modules/todoListArray.js';

const allFuncs = () => {
  addTaskFunc();
  buildTodoUI();
  saveList();
  clearAllCompleted();
  editTask();
};

allFuncs();

export default allFuncs;
