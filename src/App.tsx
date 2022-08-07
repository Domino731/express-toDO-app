import React from 'react';
import './App.css';
import {SignIn} from "./Containers/Auth";

function App() {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <SignIn/>
        </div>
    );
}

export default App;
