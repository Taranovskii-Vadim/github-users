import { ReactNode, createContext, useReducer } from 'react';

import { api } from '../../api';
import getUsers from '../../api/getUsers';

import reducer from './reducer';
import { Functions, State } from './types';
import { SET_ERROR, SET_LOADING, SET_USERS } from './constants';

const initialState: State = {
  data: [],
  error: '',
  isLoading: false,
};

// @ts-ignore
export const GitHubContext = createContext<State & Functions>();

export const GitHubState = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSearch = async (value: string) => {
    try {
      dispatch({ type: SET_LOADING });

      const payload = await api(getUsers, value);

      dispatch({ type: SET_USERS, payload });
    } catch (e) {
      dispatch({ type: SET_ERROR });
    } finally {
      dispatch({ type: SET_LOADING });
    }
  };

  return <GitHubContext.Provider value={{ ...state, handleSearch }}>{children}</GitHubContext.Provider>;
};
