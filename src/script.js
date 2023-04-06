import './style.css';
import buildTodoUI from './modules/buildTodoUI.js';
import addTaskFunc from './modules/addTask.js';
import clearAllCompleted from './modules/clearAllCompleted.js';
import editTask from './modules/editTask.js';
import deleteTask from './modules/deleteTask.js';

const todoListObj = {
  TODO_KEY: 'todo-list',
  todoListArray: JSON.parse(localStorage.getItem('todo-list')) || [],
  saveList() {
    localStorage.setItem(
      'todo-list',
      JSON.stringify(todoListObj.todoListArray),
    );
  },

  addTaskFunc, // addTaskFunc function added as method

  buildTodoUI, // buildTodoUI function added as method

  clearAllCompleted, // clearAllCompleted function added as method

  editTask, // editTask function added as method

  deleteTask, // deleteTask function added as method

  allFuncs() {
    this.addTaskFunc(todoListObj);
    this.buildTodoUI(todoListObj);
    this.saveList();
    this.clearAllCompleted(todoListObj);
    this.editTask(todoListObj);
    this.deleteTask(todoListObj);
  },
};

todoListObj.allFuncs();
