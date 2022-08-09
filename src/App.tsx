import React from 'react';
import './App.css';
import {SignIn, SignUp} from "./Containers/Auth";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <Routes>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
            </Routes>
        </div>
    );
}

export default App;
