import React from 'react';
import TodoList from './todo';

class App extends React.Component {

  constructor (props) {
    super(props);

    this.addToDo = this.addToDo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      'newTodo': ''
    };
  }

  handleChange (event) {
    this.setState({ newTodo: event.target.value });
  }

  addToDo () {
    const { actions } = this.props;

    if (this.state.newTodo) {
      actions.addToDo(this.state.newTodo);
      this.setState({ 'newTodo': '' });
    }
  }

  render () {
    const { items, name } = this.props;

    return <div className="container">
      <h1>Hello {name}</h1>
      <input
        type="text"
        value={this.state.newTodo}
        onChange={this.handleChange}
        autoFocus
      />
      <button onClick={this.addToDo}>Add</button>
      <TodoList items={items} />
    </div>;
  }
}

export default App;
