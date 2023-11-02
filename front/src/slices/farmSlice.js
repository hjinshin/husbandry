import { createSlice } from '@reduxjs/toolkit'

const farmSlice = createSlice({
    name: 'farm',
    initialState: {
        land: 0,
        total_land: 20,
    },
    reducers: {
        right: (state, action)=> {
            if(state.land < state.total_land) {
                state.land = state.land + 1;
            } 
        },
        left: (state, action)=> {
            if(state.land > 0) {
                state.land = state.land - 1;
            }
        }
    }
});

export default farmSlice;
export const {right, left} = farmSlice.actions;