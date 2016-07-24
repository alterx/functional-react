import h from 'virtual-dom/h';
import { compose, prop, map } from 'ramda';

const WrapChildren = (child) => ({children: child});

const Container = compose(({children}) => h('div', [
  h('h1', 'I\'m a list'),
  children
]), WrapChildren);

const List = compose(({children}) => h('ul', [children]), WrapChildren);

const ListItem = ({ id, text }) => h('li', {key: id}, [h('span', text)]);

const CurriedList = compose(Container, List, map(ListItem), prop('items'));

const TodoList = ({items}) => {
  return CurriedList({items});
};

export default TodoList;
