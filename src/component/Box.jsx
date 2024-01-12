
const style ={

    box:{
      width: "390px",
    border:"3px solid grey",
    height: "auto"
    },
    
    avatar:{
      width:"auto",
    borderBottom: "3px solid grey",
    textAlign:"center",
    },
    
    name:{
      fontSize:"24px",
      color: "black",
    fontStyle: "bold",
    display: "flex",
      flexDirection: "row",
    },
    
    text:{
      fontSize:"20px",
      color: "grey",
    },
    };



const Box =(props)=>{
    return (
        <div style={style.box}>
                <img style={style.avatar} src={props.image} alt="" />

            <h1 style={style.name}> {props.firsName} {props.lastName}</h1>
            <p style={style.text}>{props.position}</p>
            <p style={style.text}>{props.gender}</p>
            <p style={style.text}>{props.email}</p>
        </div>
    );
};

export default Box;

