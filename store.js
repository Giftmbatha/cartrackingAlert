import {configureStore} from "@redux.js/toolkit";
import navReducer from "./slices/navSlice";

export const store = configureStore({
      reducer: {
            nav: navReducer
      },
});