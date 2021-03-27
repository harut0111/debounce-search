const debounce = () => {
  let timeoutID: ReturnType<typeof setTimeout>;

  return (
    callback: (...args: unknown[]) => Promise<void>,
    wait: number,
    ...args: unknown[]
  ) => {
    if (timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => callback(...args), wait);
  };
};

export const withDebounce = debounce();
