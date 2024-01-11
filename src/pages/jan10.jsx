import ImageBox from "../component/ImageBox";
import Header from "../component/Header";

const style= {
  flex:{
    display:"flex",
   justifyContent:"center",
   alignItems:"center",
marginTop:"50px",
padding:"10px"
  },
};


export default function Example(){
  return(
    <div>
    <div style={style.flex}>
     <ImageBox></ImageBox>
     <ImageBox></ImageBox>
     <ImageBox></ImageBox>
     </div>

 <div style={style.flex}>

<Header></Header>
<Header></Header>
    </div>

    </div>
  );
};