import { SET_LOADING, SET_USERS } from './constants';
import { Action, Handlers, State } from './types';

const handlers: Handlers = {
  [SET_LOADING]: (state) => ({ ...state, isLoading: !state.isLoading }),
  [SET_USERS]: (state, { payload }) => ({ ...state, data: payload, isLoading: !state.isLoading }),
  DEFAULT: (state) => state,
};

const reducer = (state: State, action: Action): State => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};

export default reducer;
