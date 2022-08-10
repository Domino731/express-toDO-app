import {ReduxState} from "../store";
import {createSelector} from "@reduxjs/toolkit";

const userSelector = (state: ReduxState) => state.user;

export const userIsLoggedSelector = createSelector(userSelector, state => state.isLogged);