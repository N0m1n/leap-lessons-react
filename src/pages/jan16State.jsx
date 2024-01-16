import { useState } from "react";

const style = {
  flex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    padding: "10px",
    gap: "20px",
  },

  red: {
    backgroundColor: "red",
    width: "300px",
    heigth: "500px",
    fontSize: "80px",
  },

  btn: {
    width: "300px",
    heigth: "500px",
    fontSize: "40px",
  },
};

export default function Example() {
  const [count, setCount] = useState(0);

  const incrementBtn = () => {
    setCount(count + 1);
  };

  const decrementBtn = () => {
    setCount(count - 1);
  };
  return (
    <div style={style.flex}>
      <p style={{ fontSize: "40px" }}>Count {count}</p>
      <button style={style.btn} onClick={() => incrementBtn()}>
        +
      </button>
      <button style={style.btn} onClick={() => decrementBtn()}>
        -
      </button>
    </div>
  );
}
