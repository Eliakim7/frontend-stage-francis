import { Route, Routes } from "react-router-dom";
import Template from "./component/template";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";
import UpdateItem from "./pages/UpdateItem";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register"

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element= {<Template/>}>
          <Route index element = {<Home/>}/>
          <Route path = "detail/:id" index element = {<ItemDetails/>}/>
          <Route path = "update/:id" index element = {<UpdateItem/>}/>
          <Route path = "auth/register" index element = {<Register/>}/>
          <Route path = "auth/login" index element = {<Login/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
