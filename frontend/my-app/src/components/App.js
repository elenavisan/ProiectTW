import Friends from "./Friends";
import MyFridge from "./MyFridge";
import NavBar from "./NavBar";
import Home from "./Home";
import {Route, Routes} from "react-router-dom";

function App(){
    return (
       <>
       <NavBar/>
       <div className="container"> 
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Friends" element={<Friends />}/> 
        <Route path="/MyFridge" element={<MyFridge />}/>
        </Routes>
       </div>
       </>
    )
}

export default App;