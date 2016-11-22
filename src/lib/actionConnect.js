import { curry } from 'ramda';
import { h } from 'preact';

const actionConnect = curry((actions, Component, props) => {
  return <Component actions={actions} {...props} />;
});

export default actionConnect;
