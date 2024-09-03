import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  language: 'en', // Varsayılan dil İngilizce olarak ayarlandı
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;