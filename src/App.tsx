import React from 'react';
import './App.css';
import {SignIn, SignUp} from "./Containers/Auth";
import {Routes, Route} from "react-router-dom";
import {PrivateRoute} from "./Router/PrivateRoute";

function App() {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <Routes>
                <Route path="/" element={<PrivateRoute>
                    <div>logged</div>
                </PrivateRoute>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
            </Routes>
        </div>
    );
}

export default App;
