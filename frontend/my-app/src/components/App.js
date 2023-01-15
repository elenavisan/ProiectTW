import Friends from "./Friends";
import MyFridge from "./MyFridge";
import NavBar from "./NavBar";
import Home from "./Home";
import {Route, Routes} from "react-router-dom";
import AddAliment from "./AddAliment";
import LoginPage from "./LoginPage";
import FriendsAliments from "./FriendsAliments";


function App(){
    return (
       <>
       <NavBar/>
       <div className="container"> 
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Friends" element={<Friends />}/> 
        <Route path="/MyFridge" element={<MyFridge />}/>
        <Route path="/MyFridge/AddAliment" element={<AddAliment/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/Friends/FriendsAliments" element={<FriendsAliments />}/> 
        </Routes>
       </div>
       </>
    )
}

export default App;