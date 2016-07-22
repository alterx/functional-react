import { default as sendAction } from 'send-action';
import { default as xtend } from 'xtend';

export function stateManager (initialState) {
  let handlers = { };

  const model = sendAction({
    onaction: function (action, state) {
      switch (action.type) {
        case 'name':
          return xtend(state, { name: action.value });
        case 'todos:add':
          return xtend(state, { items: [...state.items, action.value] });
        default:
          return state;
      }
    },
    onchange: function (action, state, oldstate) {
      fire('store:updated', state);
    },
    state: initialState
  });

  function registerHandler (event, callback) {
    handlers[event] = callback;
  }

  function fire (event, payload) {
    if (handlers[event]) {
      handlers[event](payload);
    }
  }

  return {
    subscribe: (cb) => {
      registerHandler('store:updated', cb);
    },
    dispatch: model
  };
};

