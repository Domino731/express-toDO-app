import React, {useEffect} from 'react';
import './App.css';
import {SignIn, SignUp} from "./Containers/Auth";
import {Routes, Route} from "react-router-dom";
import {PrivateRoute} from "./Router/PrivateRoute";
import {apiRequest} from "./api/methods";
import Home from "./Containers/Home";

function App() {

    // useEffect(() => {
    //     apiRequest("GET", "/add-task").then(res => console.log(res))
    // }, []);

    return (
        <div className="flex justify-center items-center h-full w-full">
            <Routes>
                <Route path="/" element={<PrivateRoute>
                    <Home/>
                </PrivateRoute>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
            </Routes>
        </div>
    );
}

export default App;
