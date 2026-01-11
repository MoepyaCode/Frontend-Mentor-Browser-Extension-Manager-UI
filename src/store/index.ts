import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import ExtensionSlice from "./reducer";

const Store = configureStore({
  reducer: {
    [ExtensionSlice.name]: ExtensionSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});

export type AppSelector = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
