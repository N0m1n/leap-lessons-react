import Box from "@/component/Box";

const style ={

   body: {
    display: "flex",
  justifyContent: "center",
  alignItems:"center",
  backgroundColor:"black",
  },
  container: {
  display:"grid",
    gridTemplateColumns:"390px 390px 390px",
    gap: "84px",
    marginTop: "200px",
  padding:" 134px 32px 100px 32px",
  backgroundColor: "white"
  },

  margin :{
    marginLeft: "27px",
  },
  // boxer:{
  //   display: flex;
  //   flex-direction: row;
  //   gap: 31px;
  // }
  
  };
  
  

export default function Home() {
  return(
    <div style={style.body}>
      <div style={style.container}>
      <Box>
     
      </Box>

      </div>
    </div>
 
  )
};


