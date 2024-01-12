
const style ={

  box:{
    width: "390px",
  height: "auto"
  },
  
  avatar:{
    width:"300px",
    heigth: "300px",
  borderBottom: "3px solid grey",
  textAlign:"center",
  },
  text:{
    fontSize:"24px",
    color: "black",
  fontStyle: "bold",
  display: "flex",
    flexDirection: "row",
  },
};

const List2 =(props)=>{
    return (
      <div style={style.box}>
        

            <p style={style.text} >{props.score}</p>
        </div>
    );
};

export default List2;

