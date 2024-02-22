import { configureStore } from '@reduxjs/toolkit';
// import validSlice from './slices/validSlice';
import userSlice from './slices/userSlice';
import farmSlice from './slices/farmSlice'
import settingSlice from './slices/settingSlice';

const store = configureStore({
    reducer: {
		// // 검증
    	// valid: validSlice.reducer,
		// 유저 정보
		user: userSlice.reducer,
		// 농장 정보
		farm: farmSlice.reducer,
		// 세팅 정보
		setting: settingSlice.reducer,
    },
  });

export default store;