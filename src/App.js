import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement"
import Error from "./pages/Error";
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

const App = () => {
  return (
    <>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement" element={<Logement />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </>
  )
}

export default App;