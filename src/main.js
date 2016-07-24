import App from './app';
import vraf from 'virtual-raf';
import vdom from 'virtual-dom';
import { stateManager, actions, actionConnect } from './lib';

const initialState = {
  name: 'Carlos',
  items: []
};

const store = stateManager(initialState);
const bindedActions = actions(store);
const ConnectedApp = actionConnect(bindedActions, App);

const tree = vraf(initialState, ConnectedApp, vdom);
document.getElementById('app').appendChild(tree.render());

store.subscribe((state) => {
  tree.update(state);
});
