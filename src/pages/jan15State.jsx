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

  btn: {
    width: "300px",
    heigth: "500px",
    fontSize: "80px",
  },
};

export default function Example() {
  const [toggle, setToggle] = useState(true);

  const toggleBtn = () => {
    setToggle(!toggle);
  };

  return (
    <div style={style.flex}>
      <h1>Toggle turn ON/OFF</h1>

      <button style={style.btn} onClick={toggleBtn}>
        {toggle ? "on" : " off"}
      </button>
    </div>
  );
}
