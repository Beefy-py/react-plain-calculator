import React from "react";

const Screen = ({ input, setDisabledBtns }) => {
  let result = 0;
  let operation = new String(input);

  if (operation.includes("=")) {
    try {
      result = eval(operation.slice(0, -3));
      operation = "Result: ";
    } catch (error) {
      console.log(error);
      operation = "ERROR";
    }
  }

  if (result) {
    setDisabledBtns(true);
  } else {
    setDisabledBtns(false);
  }

  return (
    <div className="screen w-full bg-gray-800 mb-3 rounded-md p-5 text-gray-100 ">
      <div className="operation pb-2">{operation}</div>
      <div className="result border-t border-gray-600 pt-2">{result}</div>
    </div>
  );
};

export default Screen;
