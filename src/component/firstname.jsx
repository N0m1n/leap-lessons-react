import List4 from "./age";

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

const List1 = (props) => {
  return (
    <div style={style.box}>
      <p style={style.text}> First Name : {props.firstName}</p>
      <List4 age={props.age}> </List4>
    </div>
  );
};
export default List1;
