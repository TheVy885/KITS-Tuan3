// import logo from './logo.svg';
import "./App.css";
import { useRoutes } from "react-router-dom";
import { HomePage } from "./container/HomePage";
import { Header } from "./component/Header";
import { Route, Routes } from "react-router-dom";
import { ShoppingPage } from "./container/ShoppingPage";
function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/shopping" element={<ShoppingPage/>}/>
      </Routes>
      
    </>
  );
}

export default App;
