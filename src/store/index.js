import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { reudcer } from "../reducers";

export const store = createStore(reudcer,applyMiddleware(thunk));
