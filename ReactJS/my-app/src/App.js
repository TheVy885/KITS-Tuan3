import "./App.css";
import styled from "styled-components";
// import { useState } from 'react';
// import { Counter2 } from 'components/Counter';

// import { Button } from 'components/Button';
// import { Card } from "component/card/Card";
// import plusIcon from 'assets/plus.svg'
// import rightArrow from 'assets/right-arrow.svg'
import { Route, Router, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Home from "container/Home/Home";
import { About } from "container/About";
import { LoginPage } from "container/Login";
import { NotFoundPage } from "container/NotFoundPage";
import { useRoutes } from "react-router-dom";
// là css trong js
const AppWrapper = styled.div`
  text-align: center;
  .button-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    font-weight: 700;
    font-size: 13px;
    color: #27262e;
  }
  .list-card {
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
  }
`;
function App() {

  let element = useRoutes([
    { path: "/", element: <Home />,},
    { path: "about", element: <About /> },
    { path: "login", element: <LoginPage /> },
    // { path: "*", element: <NotFoundPage /> },
  ]);
  return element;
}

export default App;
