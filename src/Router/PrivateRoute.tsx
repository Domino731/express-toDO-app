import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {userIsLoggedSelector} from "../Reducers/user/selectors";
import React from "react";


export const PrivateRoute: React.FC<any> = ({children}) => {
    const userIsLogged = useSelector(userIsLoggedSelector);

    if (!userIsLogged) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/sign-in"/>
    }

    // authorized so return child components
    return children;
}