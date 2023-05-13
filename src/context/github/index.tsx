import { ReactNode, createContext, useReducer } from 'react';

import { api } from '../../api';
import getUsers from '../../api/getUsers';

import reducer from './reducer';
import { Actions, State } from './types';
import { SET_LOADING, SET_USERS } from './constants';

const initialState: State = {
  data: [],
  error: '',
  isLoading: false,
};

// @ts-ignore
export const GitHubContext = createContext<State & Actions>();

// TODO think how to type dispatch
export const GitHubState = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSearch = async (value: string) => {
    dispatch({ type: SET_LOADING });
    const payload = await api(getUsers, value);

    dispatch({ type: SET_USERS, payload });
  };

  return <GitHubContext.Provider value={{ ...state, handleSearch }}>{children}</GitHubContext.Provider>;
};
