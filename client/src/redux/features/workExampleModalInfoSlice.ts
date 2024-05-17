import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProject {
  mainImg: string;
  header: string;
  category: string;
  date: string;
  client: string;
  text1: string;
  imgsArray: string[];
  text2: string;
}

interface IWorkExampleModalInfoState {
  isOpen: boolean;
  data: IProject | null;
}

const initialState: IWorkExampleModalInfoState = {
  isOpen: false,
  data: null,
};

const workExampleModalInfoSlice = createSlice({
  name: "workExampleModalInfo",
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setData: (state, action: PayloadAction<IProject>) => {
      state.data = action.payload;
    },
  },
});

export const { setIsOpen, setData } = workExampleModalInfoSlice.actions;

export default workExampleModalInfoSlice.reducer;
