import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IImagesFullScreenPreviewModalState {
  isOpen: boolean;
  images: string[] | null;
  activeIndex: number;
}

const initialState: IImagesFullScreenPreviewModalState = {
  isOpen: false,
  images: null,
  activeIndex: 0,
};

const imagesFullScreenPreviewModalSlice = createSlice({
  name: "imagesFullScreenPreviewModal",
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setImages: (state, action: PayloadAction<string[]>) => {
      state.images = action.payload;
    },
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeIndex = action.payload;
    },
  },
});

export const { setIsOpen, setImages, setActiveIndex } =
  imagesFullScreenPreviewModalSlice.actions;

export default imagesFullScreenPreviewModalSlice.reducer;
