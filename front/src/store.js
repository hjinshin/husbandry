import { configureStore } from '@reduxjs/toolkit';
import validSlice from './slices/validSlice';
import userSlice from './slices/userSlice';
import farmSlice from './slices/farmSlice'

const store = configureStore({
    reducer: {
		// 검증
    	valid: validSlice.reducer,
		// 유저 정보
		user: userSlice.reducer,
		// 농장 정보
		farm: farmSlice.reducer,
    },
  });

export default store;