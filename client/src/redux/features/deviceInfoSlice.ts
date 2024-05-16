import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IDeviceInfoState {
  isMobileDevice: boolean | null;
}

const initialState: IDeviceInfoState = {
  isMobileDevice: null,
};

const deviceInfoSlice = createSlice({
  name: "deviceInfo",
  initialState,
  reducers: {
    setDeviceType: (state, action: PayloadAction<boolean>) => {
      state.isMobileDevice = action.payload;
    },
  },
});

export const { setDeviceType } = deviceInfoSlice.actions;

export default deviceInfoSlice.reducer;
