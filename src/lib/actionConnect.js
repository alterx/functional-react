import { curry } from 'ramda';

const actionConnect = curry((actions, Component, props) => {
  return Component({ ...props, actions });
});

export default actionConnect;
