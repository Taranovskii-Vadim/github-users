import { ReactNode, createContext, useReducer } from 'react';

import { api } from 'src/api';
import getUser from 'src/api/getUser';
import getRepositories from 'src/api/getRepositories';

import reducer from './reducer';
import { Functions, State } from './types';
import { SET_ERROR, SET_LOADING, SET_DATA } from './constants';

const initialState: State = {
  data: undefined,
  error: '',
  isLoading: false,
};

// @ts-ignore
export const UserContext = createContext<State & Functions>();

export const UserState = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (value: string | undefined) => {
    try {
      if (!value) {
        throw new Error('Value for name is undefined');
      }

      dispatch({ type: SET_LOADING });

      const [profile, repos] = await Promise.all([api(getUser, value), api(getRepositories, value)]);

      dispatch({ type: SET_DATA, payload: { profile, repos } });
    } catch (e) {
      dispatch({ type: SET_ERROR });
    } finally {
      dispatch({ type: SET_LOADING });
    }
  };

  return <UserContext.Provider value={{ ...state, fetchData }}>{children}</UserContext.Provider>;
};
