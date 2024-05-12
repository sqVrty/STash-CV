import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IWorkExampleModalInfoState {
  workExampleModalKey: number | null;
}

const initialState: IWorkExampleModalInfoState = {
  workExampleModalKey: null,
};

const workExampleModalInfoSlice = createSlice({
  name: "workExampleModalInfo",
  initialState,
  reducers: {
    setWorkExampleModalKey: (state, action: PayloadAction<number>) => {
      state.workExampleModalKey = action.payload;
    },
  },
});

export const { setWorkExampleModalKey } = workExampleModalInfoSlice.actions;

export default workExampleModalInfoSlice.reducer;
