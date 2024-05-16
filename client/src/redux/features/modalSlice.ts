import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModalState {
  isOpen: boolean;
  modalHeader: string | null;
  modalContent: JSX.Element | null;
}

const initialState: IModalState = {
  isOpen: false,
  modalHeader: null,
  modalContent: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setModalHeader: (state, action: PayloadAction<string>) => {
      state.modalHeader = action.payload;
    },
    setModalContent: (state, action: PayloadAction<JSX.Element>) => {
      state.modalContent = action.payload;
    },
  },
});

export const { setIsOpen, setModalHeader, setModalContent } =
  modalSlice.actions;

export default modalSlice.reducer;
