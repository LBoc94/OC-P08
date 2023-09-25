// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Logement from "./pages/Logement"
// import Error from "./pages/Error";
// import Header from "./components/Header";

// const Test = () => {
//   return (
//         <div>
//           <p></p>
//         </div>
// )
// }

// function App () {
//   return (
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//     </Routes>
//   )
// }


/// WORKING

// import {useState,useEffect} from 'react';

// function App() {
//   const [data,setData]=useState([]);

//   const getData=()=>{
//     fetch('data.json'
//     ,{
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     }
//     )
//       .then(function(response){
//         console.log(response)
//         return response.json();
//       })
//       .then(function(myJson) {
//         console.log(myJson);
//         setData(myJson)
//       });
//   }

//   useEffect(()=>{
//     getData()
//   },[])

//   // return (
//   //   // <div className="App">
//   //   //  {
//   //   //    data && data.length>0 && data.map((item)=><p>{item.about}</p>)
//   //   //  }
//   //   // </div>

//   // );
// }

// export default App;