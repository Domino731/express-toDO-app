import {ReduxState} from "../store";
import {TASKS_REDUCER_NAME} from "./reducer";
import {createSelector} from "@reduxjs/toolkit";

const tasksState = (state: ReduxState) => state[TASKS_REDUCER_NAME];

/** REDUX - tasks selector, get data about tasks*/
export const tasksDataSelector = createSelector(tasksState, (state) => state.data);
