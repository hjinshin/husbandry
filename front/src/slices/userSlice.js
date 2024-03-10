import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBalance, getDraw, getNextDay, getUserInfo } from '../APIs/getApi';

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
const fetchGetDraw = createAsyncThunk(
    'user/fetchGetDraw',
    async(order) => {
        const res = await getDraw(order);
        return res;
    }
)
const fetchGetNextDay = createAsyncThunk(
    'user/fetchGetNextDay',
    async() => {
        const res = await getNextDay();
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
        draw: 0,
    },
    reducers: {
        addMoney: (state, action)=> {
            state.money += action.payload;
        },
        subMoney: (state, action)=> {
            state.money -= action.payload;
        },
        nextDay: (state, action)=> {
            state.day += 1;
        },
        clearBaby:(state, action)=> {
            state.baby = null;
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
            state.status = 'pending';
            state.currentRequestId = action.meta.requestId;
            
        });
        builder.addCase(fetchUpdateUser.fulfilled, (state,action)=>{
            state.status = 'idle';
            state.currentRequestId = undefined;                    
            if(action.payload.success) {
                state.money = action.payload.object.money;
                state.day = action.payload.object.day;
                state.owned_animal = action.payload.object.owned_animal;
                state.baby = action.payload.object.baby;
            }

            
        });
        builder.addCase(fetchUpdateUser.rejected, (state,action)=>{
            state.status = 'idle';
            state.error = action.error;
            state.currentRequestId = undefined;
        });


        builder.addCase(fetchUpdateBalance.pending, (state,action)=>{
            state.status = 'pending';
            state.currentRequestId = action.meta.requestId;
        });
        builder.addCase(fetchUpdateBalance.fulfilled, (state,action)=>{
            state.status = 'idle';
            state.currentRequestId = undefined;
            if(action.payload.success) {
                state.money = action.payload.object;
            }
        });
        builder.addCase(fetchUpdateBalance.rejected, (state,action)=>{
            state.status = 'idle';
            state.error = action.error;
            state.currentRequestId = undefined;
        });
        

        builder.addCase(fetchGetDraw.pending, (state,action)=>{
            state.status = 'pending';
            state.currentRequestId = action.meta.requestId;
        });
        builder.addCase(fetchGetDraw.fulfilled, (state,action)=>{
            state.status = 'idle';
            state.currentRequestId = undefined;
            if(action.payload.success) {
                state.draw = action.payload.object;
                state.owned_animal[action.payload.object] = true;                    
            }
        });
        builder.addCase(fetchGetDraw.rejected, (state,action)=>{
            state.status = 'idle';
            state.error = action.error;
            state.currentRequestId = undefined;
        });
                

        builder.addCase(fetchGetNextDay.pending, (state,action)=>{
            state.status = 'pending';
            state.currentRequestId = action.meta.requestId;
        });
        builder.addCase(fetchGetNextDay.fulfilled, (state,action)=>{
            state.status = 'idle';
            state.currentRequestId = undefined;
            if(action.payload.success) {
                state.day = action.payload.object;                  
            }
        });
        builder.addCase(fetchGetNextDay.rejected, (state,action)=>{
            state.status = 'idle';
            state.error = action.error;
            state.currentRequestId = undefined;
        });
      }
});
export default userSlice;
export { fetchUpdateUser, fetchUpdateBalance, fetchGetDraw, fetchGetNextDay };
export const { addMoney, subMoney, nextDay, clearBaby, updateUserSlice } = userSlice.actions;