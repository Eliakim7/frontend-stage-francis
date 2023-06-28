import { Route, Routes } from "react-router-dom";
import Template from "./component/template";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element= {<Template/>}>
          <Route index element = {<Home/>}/>
          <Route path = "detail/:id" index element = {<ItemDetails/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
