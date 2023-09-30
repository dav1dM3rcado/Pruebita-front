import Footer from "./components/Layout/footer";
import Hola from "./components/home/Hola";

import { BrowserRouter,Route,Routes } from "react-router-dom";


function App() {
  

  return (

    
     <BrowserRouter>
     <Routes>
      
     <Route path="/" element={<Footer/>}/>

     </Routes>
     <Routes>
     <Route path="/Hola" element={<Hola />} />

     </Routes>
     
     </BrowserRouter>

     
    
    
  )
}

export default App;
