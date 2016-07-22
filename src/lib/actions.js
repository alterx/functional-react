import { default as uuid } from 'node-uuid';

export function actions (store) {
  function addToDo (text) {
    store.dispatch({ type: 'todos:add', value: {id: uuid.v4(), text} });
  }

  return {
    addToDo
  };
}

