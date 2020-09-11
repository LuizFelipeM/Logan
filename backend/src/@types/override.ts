export type Override<T, K extends Record<string, unknown>> = Omit<T, keyof K> & K
