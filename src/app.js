import { h, Component } from 'preact';
import TodoList from './todo';

class App extends Component {
  constructor (props) {
    super(props);

    this.addToDo = this.addToDo.bind(this);
  }

  addToDo () {
    const { actions } = this.props;

    if (this.state.newTodo) {
      actions.addToDo(this.state.newTodo);
      this.setState({ 'newTodo': '' });
    }
  }

  render (props, state) {
    const { items, name } = this.props;

    return <div className="container">
      <h1>Hello {name}</h1>
      <input
        type="text"
        value={state.newTodo}
        onChange={this.linkState('newTodo')}
        autoFocus
      />
      <button onClick={this.addToDo}>Add</button>
      <TodoList items={items} />
    </div>;
  }
}

export default App;
