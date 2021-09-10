import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import couterReducer from "./counter";

const store = configureStore({
  reducer: { counter: authReducer, auth: couterReducer }
});

export default store;
