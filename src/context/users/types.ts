import { Action, StateTemplate } from '../types';

import { SET_ERROR, SET_LOADING, SET_DATA } from './constants';

export type User = {
  id: number;
  login: string;
  avatar: string;
};

export type State = StateTemplate<User[]>;

export type Functions = {
  handleSearch: (value: string) => Promise<void>;
};

export type Actions = Action<typeof SET_DATA, User[]> | Action<typeof SET_LOADING> | Action<typeof SET_ERROR>;
