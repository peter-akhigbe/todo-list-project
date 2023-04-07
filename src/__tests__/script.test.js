import todoListObj from '../script.js';

beforeEach(() => {
  document.body.innerHTML = `
    <div class="todo">
      <h1>Today's To Do</h1>
      <hr />
      <input id="type-here" type="text" placeholder="Type Here..." />
      <hr />
      <ul class="lists"></ul>
      <h2>Clear All Completed</h2>
    </div>`;

  todoListObj.todoListArray = [];
  todoListObj.allFuncs();
});

describe('testing functions', () => {
  const addOnetask = () => {
    const input = document.querySelector('input');
    input.value = 'one';
    const event = new KeyboardEvent('keypress', { key: 'Enter' });
    input.dispatchEvent(event);
  };

  const deleteOneTask = () => {
    const dotBtn = document.querySelector('#dot-1');
    dotBtn.click();

    const deleteBtn = document.querySelector('#delete-1');
    deleteBtn.click();
  };

  test('add function', () => {
    addOnetask();
    addOnetask();

    const listFromDom = [...document.querySelectorAll('.list')];

    const arr = todoListObj.todoListArray;
    const expectedObj = {
      index: 1,
      completed: false,
      discription: 'one',
    };

    expect(arr[0]).toEqual(expectedObj);
    expect(listFromDom.length).toEqual(2);
  });

  test('delete function', () => {
    addOnetask();
    addOnetask();
    addOnetask();
    addOnetask();

    deleteOneTask();
    deleteOneTask();

    const listFromDom = document.querySelectorAll('.list');
    const arr = todoListObj.todoListArray;

    expect(arr.length).toEqual(2);
    expect(listFromDom.length).toEqual(2);
  });
});
