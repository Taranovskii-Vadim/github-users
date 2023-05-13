import { Action } from '../types';

import { SET_ERROR, SET_LOADING, SET_USERS } from './constants';

export type User = {
  id: number;
  login: string;
  avatar: string;
};

export type State = {
  data: User[];
  error: string;
  isLoading: boolean;
};

export type Functions = {
  handleSearch: (value: string) => Promise<void>;
};

export type Actions = Action<typeof SET_USERS, User[]> | Action<typeof SET_LOADING> | Action<typeof SET_ERROR>;
