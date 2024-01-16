import List5 from "./work";
const style = {
  box: {
    width: "390px",
    height: "auto",
  },

  avatar: {
    width: "300px",
    heigth: "300px",
    borderBottom: "3px solid grey",
    textAlign: "center",
  },
  text: {
    fontSize: "24px",
    color: "black",
    fontStyle: "bold",
    display: "flex",
    flexDirection: "row",
  },
};

const List3 = (props) => {
  return (
    <div style={style.box}>
      <p style={style.text}> Last Name: {props.lastName}</p>
      <List5 work={props.work}> </List5>
    </div>
  );
};

export default List3;
