import React, { useState, useEffect } from 'react';
import AppContext from "./AppContext";
import logo from "./ui/logo-coral.svg";

import "./css/uifont.css";
import "./css/props.css";
import "./css/App.css";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

//Screen
import Header from "./screens/header";
import Sidebar from "./screens/sidebar";
import HomePage from "./screens/home";
import Rightbar from "./screens/rightbar";
import CoursePage from "./screens/course";
import DiscoverPage from "./screens/discover";
import CategoriesPage from "./screens/categories";
import MyCoursesPage from "./screens/mycourses";

import AccountPage from "./screens/oauth";

import * as fire_base from "firebase";
global.firebase = fire_base;
global.fire = {
    ID: null
};
var firebaseConfig = {
  apiKey: "AIzaSyA8rNwFbcpM3_bf-6ySwL6kKxpv25U59yI",
  authDomain: "findmyjobpk.firebaseapp.com",
  databaseURL: "https://findmyjobpk.firebaseio.com",
  projectId: "findmyjobpk",
  storageBucket: "findmyjobpk.appspot.com",
  messagingSenderId: "44277085031",
  appId: "1:44277085031:web:e9373700b6b6218fec75c2"
};
// Initialize Firebase
global.firebase.initializeApp(firebaseConfig);



export default function AppLoader(){

    const [isFireUser, setIsFireUser] = useState(false);

    const initFirebase = async (context) => {
        global.firebase.auth().onAuthStateChanged((user)=>{
          if(user){
              console.log("You are signed in...")
              setIsFireUser(true);
          }else{
            console.log("You are guest...");
            setIsFireUser(false);
            setTimeout(()=>{
                context.setAppLoaded(true);
            }, 500);
          }
        });
    }

    const splash = (context) => {
        return (
            <div className="App flex">      
                <div className="splash abs abc">
                    <img src={logo} className="bl" />
                </div>
            </div>
        )
    }

    const loadApp = async (context) => {
        await initFirebase(context);
    }

    return (
        <AppContext.Consumer>
            {
                context => {
                    return (
                        context.appLoaded() ? 
                        <div className="App flex">      
                            <HashRouter>
                                <Sidebar />
                                <div className="app-content">
                                    <Route exact path="/" component={HomePage} />
                                    <Route path="/course/:courseid" component={CoursePage} />
                                    <Route path="/discover" component={DiscoverPage} />
                                    <Route path="/cates" component={CategoriesPage} />
                                    <Route path="/my-courses" component={MyCoursesPage} />
                                    <Route path="/oauth" component={AccountPage} />
                                </div>    
                            </HashRouter>    
                        </div>
                        : 
                        <AppContext.Consumer>
                            {
                                context => {
                                    loadApp(context);
                                    return (splash(context))
                                }
                            }
                        </AppContext.Consumer>
                    )
                }
            }
        </AppContext.Consumer>
    )

}