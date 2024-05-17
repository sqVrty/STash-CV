import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IWindowSizeInfoState {
  windowSize: { width: number; height: number };
}

const initialState: IWindowSizeInfoState = {
  windowSize: { width: 0, height: 0 },
};

const windowSizeInfoSlice = createSlice({
  name: "windowSizeInfo",
  initialState,
  reducers: {
    setWindowSize: (
      state,
      action: PayloadAction<{ width: number; height: number }>
    ) => {
      state.windowSize.width = action.payload.width;
      state.windowSize.height = action.payload.height;
    },
  },
});

export const { setWindowSize } = windowSizeInfoSlice.actions;

export default windowSizeInfoSlice.reducer;
