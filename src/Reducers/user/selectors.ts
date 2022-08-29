import {ReduxState} from "../store";
import {createSelector} from "@reduxjs/toolkit";

const userSelector = (state: ReduxState) => state.user;

export const userIsLoggedSelector = createSelector(userSelector, state => state.user !== null);

export const userIdSelector = createSelector(userSelector, state => state.user);

export const addNewTaskLoaderSelector = createSelector(userSelector, state => state.addNewTaskLoader);