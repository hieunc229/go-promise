/**
 * Handle promise inline
 */
export default function goPromise<T = any>(fn: Promise<T>): PromiseLike<[error: Error | null, data?: T]> {
  return new Promise((resolve) => {
    fn
      .then(data => {
        resolve([null, data])
      })
      .catch(err => {
        resolve([err])
      })
  })
}