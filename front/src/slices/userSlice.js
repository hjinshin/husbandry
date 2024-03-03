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
        money: 8000,
        day: 1,
        baby: null, // w, height, width, color, h_head, w_head, h_body, w_body, h_tail, w_tail, h_f_leg, w_f_leg, 
                    //h_b_leg, w_b_leg, h_wing, w_wing, r, price, nickname
        owned_animal:[true, false,],
        currentRequestId: undefined,
        error: null,
        did_breed: false,
    },
    reducers: {
        addMoney: (state, action)=> {
            state.money += action.payload;
        },
        subMoney: (state, action)=> {
            state.money -= action.payload;
        },
        getAnimal: (state, action)=> {
            state.owned_animal[action.payload] = true;
        },
        nextDay: (state, action)=> {
            state.day += 1;
        },
        clearBaby:(state, action)=> {
            state.baby = null;
        },
        breeding: (state, action) => {
            state.did_breed = true;
        },
        clearBreeding: (state, action) => {
            state.did_breed = false;
        },

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
export const { addMoney, subMoney, getAnimal, nextDay, clearBaby, breeding, clearBreeding } = userSlice.actions;