import List1 from "../component/firstname";
import List2 from "@/component/score";
import List3 from "@/component/lastname";

const style = {
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    padding: "10px",
    backgroundColor: "white",
    width: "auto",
    height: "100%",
    gap: "10px",
  },
  box: {
    width: "390px",
    height: "auto",
  },
};

// const arr = [ {imageUrl:"https://mgl.gogo.mn/newsn/thumbnail/72/images/c/2020/05/255077-04052020-1588581343-1415143443-thumbnail_alfredo_1600x1067.jpg", title:"Алфредо паста"},
// {imageUrl:"https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2024/01/314526-09012024-1704775186-41906697-3c70e1e0-ae33-11ee-b4f2-5db09c62f717.jpg", title:"Apple зарим утсаа зориуд удаашруулсан үндэслэлээр нөхөн төлбөр төлж эхэллээ"},
//  {imageUrl: "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2024/01/314519-09012024-1704766229-1752379496-4638f674-f755-4740-a07e-131a018c93f1.jpg", title: "2024 оныг тодорхойлох найман бүтээгдэхүүн"}]

// export default function Example(){
//   return(

//     <div style={style.flex}>
//       {arr.map((el)=>(
//  <Box image={el.imageUrl} title={el.title} ></Box>
//       ))}

//      </div>
//   );
// };

const arr = [
  {
    firstName: "Duluu",
    score: "100",
    lastName: "Bill",
    age: 121212,
    work: "Pinecone",
  },
  {
    firstName: "Dashka",
    score: "69",
    lastName: "Billy",
    age: 121212,
    work: "Pinecone",
  },
];

export default function Example() {
  return (
    <div>
      {arr.map((el) => (
        <div style={style.flex}>
          <List1 firstName={el.firstName} age={el.age}></List1>
          <List2 score={el.score}></List2>
          <List3 lastName={el.lastName} work={el.work}></List3>
        </div>
      ))}
    </div>
  );
}
