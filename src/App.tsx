import React, {useEffect} from 'react';
import './App.css';
import {SignIn, SignUp} from "./Containers/Auth";
import {Routes, Route} from "react-router-dom";
import {PrivateRoute} from "./Router/PrivateRoute";
import {apiRequest} from "./api/methods";

function App() {

    useEffect(() => {
        apiRequest("GET", "/set-cookies").then(res => console.log(res))
    }, []);

    return (
        <div className="flex justify-center items-center h-full w-full">
            <Routes>
                <Route path="/" element={<PrivateRoute>
                    <div>logged</div>
                </PrivateRoute>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
            </Routes>
        </div>
    );
}

export default App;
