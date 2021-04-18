class Debounce {
  _timeoutID: ReturnType<typeof setTimeout> | null;
  constructor() {
    this._timeoutID = null;
  }
  wrapper(
    callback: (...args: unknown[]) => Promise<void>,
    wait: number,
    ...args: unknown[]
  ): void {
    if (this._timeoutID) clearTimeout(this._timeoutID);
    this._timeoutID = setTimeout(() => callback(...args), wait);
  }
}
export default Debounce;


// const debounce = () => {
//   let timeoutID: ReturnType<typeof setTimeout>;

//   return (
//     callback: (...args: unknown[]) => Promise<void>,
//     wait: number,
//     ...args: unknown[]
//   ) => {
//     if (timeoutID) clearTimeout(timeoutID);
//     timeoutID = setTimeout(() => callback(...args), wait);
//   };
// };

// export const withDebounce = debounce();