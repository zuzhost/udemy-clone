import React from 'react';
//import logo from './logo.svg';
import "./css/uifont.css";
import "./css/props.css";
import "./css/App.css";

//Screen
import Header from "./screens/header";
import Sidebar from "./screens/sidebar";
import HomePage from "./screens/home";
import Rightbar from "./screens/rightbar";
import CoursePage from "./screens/course";
import DiscoverPage from "./screens/discover";
import CategoriesPage from "./screens/categories";
import MyCoursesPage from "./screens/mycourses";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


function App() {
  //<Rightbar />
  return (
    <div className="App flex">      
      <HashRouter>
        <Sidebar />
        <div className="app-content">
            <Route exact path="/" component={HomePage} />
            <Route path="/course/:courseid" component={CoursePage} />
            <Route path="/discover" component={DiscoverPage} />
            <Route path="/cates" component={CategoriesPage} />
            <Route path="/my-courses" component={MyCoursesPage} />
        </div>    
      </HashRouter>    
    </div>
  );
}

export default App;
