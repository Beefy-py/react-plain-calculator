import React, { useState } from "react";
import { Buttons, Screen } from "./components";

const App = () => {
  const [input, setInput] = useState("");
  const [disabledBtns, setDisabledBtns] = useState(false);
  console.log(input);

  return (
    <div className="w-full">
      <div className="calculator w-[90%] sm:w-2/4  lg:w-2/5 xl:w-1/5 my-10 mx-auto bg-gray-200 border-3 border-gray-600 rounded-lg p-5">
        <Screen
          input={input}
          setInput={setInput}
          setDisabledBtns={setDisabledBtns}
        />
        <Buttons setInput={setInput} disabledBtns={disabledBtns} />
      </div>
    </div>
  );
};

export default App;
