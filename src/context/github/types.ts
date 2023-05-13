// TODO check defaults types in react maybe there are ts types under the hood

export type Actions = {
  handleSearch: (value: string) => Promise<void>;
};

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

export type Action = { type: string; payload?: unknown };

export type Handlers = Record<string, (state: State, action: Action) => State>;
