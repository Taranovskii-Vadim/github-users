import { SET_ERROR, SET_LOADING, SET_USERS } from './constants';

export type ActionType = typeof SET_ERROR | typeof SET_LOADING | typeof SET_USERS;

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
