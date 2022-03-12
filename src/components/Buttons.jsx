import React from "react";

const buttons = [
  { type: "function", name: "clearAll", symbol: "CA" },
  { type: "function", name: "deleteOne", symbol: "DEL" },

  { type: "number", name: "one", symbol: "0" },
  { type: "number", name: "one", symbol: "1" },
  { type: "number", name: "two", symbol: "2" },
  { type: "number", name: "three", symbol: "3" },
  { type: "number", name: "four", symbol: "4" },
  { type: "number", name: "five", symbol: "5" },
  { type: "number", name: "six", symbol: "6" },
  { type: "number", name: "seven", symbol: "7" },
  { type: "number", name: "eight", symbol: "8" },
  { type: "number", name: "nine", symbol: "9" },

  { type: "operand", name: "plus", symbol: "+" },
  { type: "operand", name: "minus", symbol: "-" },
  { type: "operand", name: "times", symbol: "*" },
  { type: "operand", name: "equals", symbol: "=" },
];

const Buttons = ({ setInput, disabledBtns }) => {
  const onBtnClick = (e) => {
    e.preventDefault();
    const { target: btn } = e;

    const btnSymbol = btn.getAttribute("data-symbol");
    const btnType = btn.getAttribute("data-type");
    const btnName = btn.getAttribute("data-name");

    switch (btnType) {
      case "function":
        if (btnSymbol === "CA") {
          setInput("");
        }

        if (btnSymbol === "DEL") {
          setInput((prevState) => prevState.slice(0, -1));
        }

        break;

      case "operand":
        setInput((prevState) => prevState + ` ${btnSymbol} `);
        break;

      default:
        setInput((prevState) => prevState + btnSymbol);
        break;
    }
  };

  return (
    <div className="grid grid-cols-3 gap-5">
      {buttons.map((button) => (
        <button
          onClick={onBtnClick}
          className={`${
            disabledBtns && button.type !== "function"
              ? "cursor-no-drop opacity-60 hover:outline-none"
              : "cursor-pointer"
          } border-2 border-gray-500 ${
            button.type == "operand" &&
            button.symbol !== "=" &&
            "bg-gray-600 text-xl hover:outline-gray-800 "
          } ${button.symbol === "CA" && "bg-red-500 hover:outline-red-800"} ${
            button.symbol === "DEL" && "bg-orange-500 hover:outline-orange-800"
          } ${
            button.type === "number" && "bg-blue-300 hover:outline-blue-600"
          } ${
            button.symbol === "=" && "bg-green-500 hover:outline-green-800"
          }  flex justify-center py-4 rounded-md hover:text-white hover:outline-dashed`}
          data-type={button.type}
          data-name={button.name}
          data-symbol={button.symbol}
          disabled={disabledBtns && button.type !== "function"}
        >
          {button.symbol}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
