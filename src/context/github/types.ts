// TODO check defaults types in react maybe there are ts types under the hood
export type State = {
  data: string[];
  error: string;
  isLoading: boolean;
};

export type Action = { type: string; payload: unknown };

export type Handlers = Record<string, (state: State, action: Action) => State>;
