/**
 * Handle promise inline
 */
export default function goPromise<T = any>(fn: Promise<T>): PromiseLike<[error: Error | null, data: T | any]>;
