import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBalance, getUserInfo } from '../APIs/getApi';

const fetchUpdateUser = createAsyncThunk(
    'user/fetchUpdateUser',
    async() => {
        const res = await getUserInfo();
        return res;
    }
)
const fetchUpdateBalance = createAsyncThunk(
    'user/fetchUpdateBalance',
    async() => {
        const res = await getBalance();
        return res;
    }
)

const userSlice = createSlice({
    name:'user',
    initialState: {
        status: 'idle',
        currentRequestId: undefined,
        error: null,
        money: 8000,
        day: 1,
        baby: null, // w, height, width, color, h_head, w_head, h_body, w_body, h_tail, w_tail, h_f_leg, w_f_leg, 
                    //h_b_leg, w_b_leg, h_wing, w_wing, r, price, nickname
        owned_animal:[true, false,],
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
        updateUserSlice: (state, action) => {
            state.money = action.payload.money;
            state.day = action.payload.day;
            state.owned_animal = action.payload.owned_animal;
            state.baby = action.payload.baby;
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUpdateUser.pending, (state,action)=>{
            if(state.status === 'idle') {
                state.status = 'pending';
                state.currentRequestId = action.meta.requestId;
            }
        });
        builder.addCase(fetchUpdateUser.fulfilled, (state,action)=>{
            const { requestId } = action.meta;
            if(state.status === 'pending' && state.currentRequestId === requestId) {
                state.status = 'idle';
                state.money = action.payload.money;
                state.day = action.payload.day;
                state.owned_animal = action.payload.owned_animal;
                state.baby = action.payload.baby;
                state.currentRequestId = undefined;
            }
        });
        builder.addCase(fetchUpdateUser.rejected, (state,action)=>{
            const { requestId } = action.meta;
            if(state.status === 'pending' && state.currentRequestId === requestId) {
                state.status = 'idle';
                state.error = action.error;
                state.currentRequestId = undefined;
            }
        });


        builder.addCase(fetchUpdateBalance.pending, (state,action)=>{
            if(state.status === 'idle') {
                state.status = 'pending';
                state.currentRequestId = action.meta.requestId;
            }
        });
        builder.addCase(fetchUpdateBalance.fulfilled, (state,action)=>{
            const { requestId } = action.meta;
            if(state.status === 'pending' && state.currentRequestId === requestId) {
                state.status = 'idle';
                state.currentRequestId = undefined;
                state.money = action.payload;
            }
        });
        builder.addCase(fetchUpdateBalance.rejected, (state,action)=>{
            const { requestId } = action.meta;
            if(state.status === 'pending' && state.currentRequestId === requestId) {
                state.status = 'idle';
                state.error = action.error;
                state.currentRequestId = undefined;
            }
        });
      }
});
export default userSlice;
export { fetchUpdateUser, fetchUpdateBalance };
export const { addMoney, subMoney, getAnimal, nextDay, clearBaby, breeding, clearBreeding, updateUserSlice } = userSlice.actions;