/* eslint-disable import/no-cycle */
import './style.css';
import buildTodoUI from './modules/buildTodoUI.js';
import addTaskFunc from './modules/addTask.js';
import clearAllCompleted from './modules/clearAllCompleted.js';
import editTask from './modules/editTask.js';
import deleteTask from './modules/deleteTask.js';

const TODO_KEY = 'todo-list';
const todoListArray = JSON.parse(localStorage.getItem(TODO_KEY)) || [];

const saveList = () => {
  localStorage.setItem(TODO_KEY, JSON.stringify(todoListArray));
};

const allFuncs = () => {
  addTaskFunc();
  buildTodoUI();
  saveList();
  clearAllCompleted();
  editTask();
  deleteTask();
};

allFuncs();

export { saveList, todoListArray, allFuncs };
