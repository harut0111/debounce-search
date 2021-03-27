import React from "react";
import Api from "./api";
import "./App.css";

const App = (): JSX.Element => {
  const [result, setResult] = React.useState("Empty");

  const getRandomDogs = async () => {
    try {
      const result = await Api.fetchRandomDogs();
      setResult(JSON.stringify(result, null, "\t"));
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log("result", result);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="type to search..."
        onChange={getRandomDogs}
      />
      <div className="result">Result: {result}</div>
    </div>
  );
};

export default App;
