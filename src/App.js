import './App.scss';
import {Route, Routes} from "react-router-dom";
import Global from "./components/Global";
import Menu from "./components/Menu";
import Search from "./components/Search";
import Description from "./components/Description";
import Header from "./components/Header";
import React from "react";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="App">
          <Header/>
        <Routes>
          <Route  path={"/"} element={ <Global/> }/>
          <Route path={"/menu"} element={ <Menu/> }/>
          <Route path={"/search"} element={ <Search/>}/>
          <Route path={"/description"} element={ <Description/>}/>
        </Routes>
          <Footer/>
      </div>
  );
}

export default App;
