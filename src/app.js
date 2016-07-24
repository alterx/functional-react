import h from 'virtual-dom/h';
import TodoList from './todo';

const App = ({name, items, actions}) => {
  const input = h('input', {
    id: 'todoInput',
    type: 'text',
    oninput: (event) => { input.properties.value = event.target.value; }
  });

  return h('div', [
    h('h1', 'Hello ' + name),
    input,
    h('button', {
      onclick: (ev) => {
        if (!input.properties.value) {
          return;
        }
        actions.addToDo(input.properties.value);
        input.properties.value = '';
      }
    }, 'Add'),
    TodoList({items})
  ]);
};

export default App;
