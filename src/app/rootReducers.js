import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducer as formReducer } from 'redux-form'

import basketReducer from "../slices/basketSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["basket"],
};

const rootReducer = combineReducers({
  basket: basketReducer,
  form : formReducer
});

export default persistReducer(persistConfig, rootReducer);