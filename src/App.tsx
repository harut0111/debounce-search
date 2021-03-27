import React from "react";
import Api, { resultType } from "./api";
import "./App.css";

const withDebounce = (
  callback: (...args: unknown[]) => Promise<void>,
  wait: number
) => {
  let timeoutID: ReturnType<typeof setTimeout>;

  return (...args: unknown[]) => {
    if (timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => callback(...args), wait);
  };
};

const App = (): JSX.Element => {
  const [result, setResult] = React.useState<resultType>({
    message: "",
    status: "",
  });

  const getRandomDogs = async () => {
    console.log("API Call");
    try {
      const result = await Api.fetchRandomDogs();
      setResult(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getRandomDogsWithDebounce = withDebounce(getRandomDogs, 500);

  return (
    <div className="App">
      <div>
        <b>this case wait time is 500ms...</b>
        <br />
        open console to see when api call occured
        <br />
        it makes next api call only after 500ms
      </div>
      <input
        type="text"
        placeholder="type to search..."
        onChange={getRandomDogsWithDebounce}
      />
      <div className="result">
        Result: {result ? JSON.stringify(result) : "Empty"}
      </div>
      <div className="image">
        {result.message && <img width="200" alt="dog" src={result.message} />}
      </div>
    </div>
  );
};

export default App;
