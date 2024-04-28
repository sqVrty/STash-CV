import { configureStore } from "@reduxjs/toolkit";

import { deviceInfoReducer } from "../redux/features";

export const store = configureStore({
  reducer: {
    deviceInfo: deviceInfoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
