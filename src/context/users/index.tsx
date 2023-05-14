import { ReactNode, createContext, useReducer } from 'react';

import { api } from 'src/api';
import getUsers from 'src/api/getUsers';

import reducer from './reducer';
import { Functions, State } from './types';
import { SET_ERROR, SET_LOADING, SET_DATA } from './constants';

const initialState: State = {
  data: [],
  error: '',
  isLoading: false,
};

// @ts-ignore
export const UsersContext = createContext<State & Functions>();

export const UsersState = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSearch = async (value: string) => {
    try {
      dispatch({ type: SET_LOADING });

      const payload = await api(getUsers, value);

      dispatch({ type: SET_DATA, payload });
    } catch (e) {
      dispatch({ type: SET_ERROR });
    } finally {
      dispatch({ type: SET_LOADING });
    }
  };

  return <UsersContext.Provider value={{ ...state, handleSearch }}>{children}</UsersContext.Provider>;
};
