import { configureStore } from "@reduxjs/toolkit";

import { deviceInfoReducer, windowSizeInfoReducer } from "../redux/features";

export const store = configureStore({
  reducer: {
    deviceInfo: deviceInfoReducer,
    windowSizeInfo: windowSizeInfoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
