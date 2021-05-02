import {configureStore, combineReducers} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import logger from "redux-logger";

import userReducer from "./user/user.slice";
import colorReducer from "./colormode/color.slice";
import currentClassReducer from "./current-class/current-class.slice";

const reducers = combineReducers(
  {
    user: userReducer,
    color: colorReducer,
    class: currentClassReducer,
  }
);

const persistConfig = {
  key: 'collegeportal',
  whitelist: ['user'],
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore(
  {
    reducer: persistedReducer,
    middleware: [logger]
  }
);