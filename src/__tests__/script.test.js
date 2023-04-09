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
  //   these functions simulates DOM activiteis
  //   starts here ----------------------------
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

  const editOneTask = () => {
    const editBtn = document.querySelector('#dot-1');
    editBtn.click();

    const input = document.querySelector('#edit-1');
    input.value = 'edited';

    const event = new KeyboardEvent('keypress', { key: 'Enter' });
    input.dispatchEvent(event);
  };

  const clickFirstCheckbox = () => {
    const checkbox = document.querySelector('#item-1');
    checkbox.click();
  };

  const clickClearBtn = () => {
    const clearBtn = document.querySelector('h2');
    clearBtn.click();
  };
  //   ends here ----------------------------

  //   testing the add function
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

  //   testing the delete function
  test('delete function', () => {
    addOnetask();
    addOnetask();

    deleteOneTask();
    deleteOneTask();

    const listFromDom = [...document.querySelectorAll('.list')];
    const arr = todoListObj.todoListArray;

    expect(arr.length).toEqual(0);
    expect(listFromDom.length).toEqual(0);
  });

  //   testing the edit function
  test('edit function', () => {
    addOnetask();

    editOneTask();

    const arr = todoListObj.todoListArray;
    const expectedObj = {
      index: 1,
      completed: false,
      discription: 'edited',
    };

    expect(arr[0]).toEqual(expectedObj);
  });

  //   testing checkbox
  test('checkbox', () => {
    addOnetask();

    clickFirstCheckbox();

    const arr = todoListObj.todoListArray;

    expect(arr[0].completed).toEqual(true);
  });

  //   testing clear all completed
  test('clear all completed', () => {
    addOnetask();
    addOnetask();

    clickFirstCheckbox();

    clickClearBtn();

    const arr = todoListObj.todoListArray;

    expect(arr.length).toEqual(1);
  });
});
