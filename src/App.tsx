import React from "react";
import "./App.css";
import Api, { resultType } from "./api";
import { withDebounce } from "./utils/debounce";
import { handleSetTime } from "./helper/handleSetTime";
import { Line } from "rc-progress";

const App = (): JSX.Element => {
  const [result, setResult] = React.useState<resultType>({
    message: "",
    status: "",
  });
  const [time, setTime] = React.useState(0);

  const getRandomDogs = async () => {
    console.log("API call occured");
    try {
      const result = await Api.fetchRandomDogs();
      setResult(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleOnChange = () => {
    withDebounce(getRandomDogs, 500);
    handleSetTime(setTime, 500);
  };

  return (
    <div className="App">
      <div>
        <b>in this case wait time is 500ms...</b>
        <br />
        open console to see when api call occured
        <br />
        it makes next api call only after 500ms
      </div>
      <div className="progress-bar">
        <Line
          percent={(time / 500) * 100}
          strokeWidth={4}
          strokeColor="#32CD32"
        />
        <span>percent: {(time / 500) * 100}</span>
        <br />
        <span>currentTime: {time}ms</span>
      </div>
      <input
        type="text"
        placeholder="type to search..."
        onChange={handleOnChange}
      />
      <div className="result">Result: {JSON.stringify(result)}</div>

      <div className="image">
        {result.message && <img width="200" alt="dog" src={result.message} />}
      </div>
    </div>
  );
};

export default App;
