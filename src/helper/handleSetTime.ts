export const handleSetTime = (
  setTime: React.Dispatch<React.SetStateAction<number>>,
  limit: number
): void => {
  setTime(0);
  let time = 0;
  const setIntervalID = setInterval(() => {
    time += 100;
    if (time >= limit) clearInterval(setIntervalID);
    setTime(time);
  }, 100);
};
