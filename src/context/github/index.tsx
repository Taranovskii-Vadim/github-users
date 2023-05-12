import { ReactNode, createContext, useReducer } from 'react';

import reducer from './reducer';
import { State } from './types';

const initialState: State = {
  data: ['vadimTest'],
  error: '',
  isLoading: false,
};

export const GitHubContext = createContext<State>(initialState);

export const GitHubState = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <GitHubContext.Provider value={{ ...state }}>{children}</GitHubContext.Provider>;
};
