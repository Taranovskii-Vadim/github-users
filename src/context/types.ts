export type StateTemplate<D> = {
  data: D;
  error: string;
  isLoading: boolean;
};

export type Action<T, P = undefined> = { type: T; payload?: P };

export type Handlers<S, A extends Action<string, unknown>> = Record<A['type'] | 'default', (state: S, action: A) => S>;
