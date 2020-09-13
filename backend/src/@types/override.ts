export type Override<T, K> = Omit<T, keyof K> & K
