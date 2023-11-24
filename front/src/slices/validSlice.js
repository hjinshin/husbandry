import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from '../APIs/getApi'

// 쿠키 검증 
const fetchCheckCookie = createAsyncThunk(
    'valid/fetchCheckCookie',
    async() => {
        const payload = await api.getCheckCookie();
        return payload.data;
    }
)

const validSlice = createSlice({
    name:'valid',
    initialState: {
        cookie: false,
        status: 'idle',
        currentRequestId: undefined,
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCheckCookie.pending, (state,action)=>{
            if(state.status === 'idle') {
                state.status = 'pending';
                state.currentRequestId = action.meta.requestId
            }
        })
        builder.addCase(fetchCheckCookie.fulfilled, (state,action)=>{
            const { requestId } = action.meta;
            if(state.status === 'pending' && state.currentRequestId === requestId) {
                state.status = 'idle';
                state.cookie = action.payload;
                state.currentRequestId = undefined;
            }
        })
        builder.addCase(fetchCheckCookie.rejected, (state,action)=>{
            const { requestId } = action.meta;
            if(state.status === 'pending' && state.currentRequestId === requestId) {
                state.status = 'idle';
                state.error = action.error;
                state.currentRequestId = undefined;
            }
        })
      }
});
export default validSlice;
export { fetchCheckCookie };