import logo from "./logo.svg";
import "./App.css";
import { Button, Space } from "antd";
import { PrimaryLayout } from "component/Layout";
import { AdminPage } from "container/Admin";
import { Route, Routes } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { UserPage } from "container/User";
import { LoginPage } from "container/Login";

function App() {
   let element = useRoutes([
    { path: "/", element: <LoginPage />,},
     { path: "user", element: <UserPage /> },
     { path: "admin", element: <AdminPage /> },
    { path: "*", element: <LoginPage /> },
  ]);
  return element;


  // <Routes>
  //   <Route path="/" element={<AdminPage/>} ></Route>
  // </Routes>
 
}

export default App;
