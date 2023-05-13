export type Action<T> = { type: T; payload?: unknown };

export type Handlers<T extends string, S> = Record<T | 'default', (state: S, action: Action<T>) => S>;
