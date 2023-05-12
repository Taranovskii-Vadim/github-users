import { Action, Handlers, State } from './types';

const handlers: Handlers = {
  DEFAULT: (state) => state,
};

const reducer = (state: State, action: Action): State => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};

export default reducer;
