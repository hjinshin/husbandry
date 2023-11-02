import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const fetchUserInfoByNickNm = createAsyncThunk(
    'user/fetchUserInfoByNickNm',
    async() => {
        return;
    }
)

const userSlice = createSlice({
    name:'user',
    initialState: {
        Info: false,
        status: 'idle',
        currentRequestId: undefined,
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserInfoByNickNm.pending, (state,action)=>{
            if(state.status === 'idle') {
                state.status = 'pending';
                state.currentRequestId = action.meta.requestId
            }
        })
        builder.addCase(fetchUserInfoByNickNm.fulfilled, (state,action)=>{
            const { requestId } = action.meta;
            if(state.status === 'pending' && state.currentRequestId === requestId) {
                state.status = 'idle';
                state.Info = action.payload;
                state.currentRequestId = undefined;
            }
        })
        builder.addCase(fetchUserInfoByNickNm.rejected, (state,action)=>{
            const { requestId } = action.meta;
            if(state.status === 'pending' && state.currentRequestId === requestId) {
                state.status = 'idle';
                state.error = action.error;
                state.currentRequestId = undefined;
            }
        })
      }
});
export default userSlice;
export { fetchUserInfoByNickNm };