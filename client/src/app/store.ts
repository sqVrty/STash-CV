import { configureStore } from "@reduxjs/toolkit";

import {
  deviceInfoReducer,
  windowSizeInfoReducer,
  workExampleModalInfoReducer,
  modalReducer,
  imagesFullScreenPreviewModalReducer,
} from "../redux/features";

export const store = configureStore({
  reducer: {
    deviceInfo: deviceInfoReducer,
    windowSizeInfo: windowSizeInfoReducer,
    workExampleModalInfo: workExampleModalInfoReducer,
    modal: modalReducer,
    imagesFullScreenPreview: imagesFullScreenPreviewModalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
