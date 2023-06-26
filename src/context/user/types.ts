import { Action, StateTemplate } from '../types';

import { SET_ERROR, SET_LOADING, SET_DATA, RESET_DATA } from './constants';

export type User = {
  id: number;
  login: string;
  avatar: string;
  email: string | null;
  location: string;
  followers: number;
  createdAt: string;
};

export type Repository = {
  id: number;
  name: string;
  private: boolean;
  language: string;
  forks: number;
};

export type DataPayload = { profile: User; repos: Repository[] };

export type State = StateTemplate<DataPayload | undefined>;

export type Functions = {
  resetData: () => void;
  fetchData: (value: string | undefined) => Promise<void>;
};

export type Actions =
  | Action<typeof SET_DATA, DataPayload>
  | Action<typeof SET_LOADING>
  | Action<typeof SET_ERROR>
  | Action<typeof RESET_DATA>;
