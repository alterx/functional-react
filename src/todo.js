import React from 'react';
import { compose, prop, map } from 'ramda';

const Container = ({children}) => (<div>
  <h1>I'm a list</h1>
  {children}
</div>);

const List = ({children}) => (<ul>{children}</ul>);

const ListItem = ({ id, text }) => (<li key={id}>
  <span>{text}</span>
</li>);

const CurriedList = compose(Container, List, map(ListItem), prop('items'));

const TodoList = ({items}) => {
  return <CurriedList items={items} />;
};

export default TodoList;
