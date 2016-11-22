import { render } from 'preact';
import { curry } from 'ramda';

let root;

const renderer = curry((node, component, props) => {
  root = render(component(props), node, root);
});

export default renderer;
