import { createSlice } from '@reduxjs/toolkit'

const farmSlice = createSlice({
    name: 'farm',
    initialState: {
        land: 0,
        total_land: 3,
        direction: 1,
    },
    reducers: {
        right: (state, action)=> {
            if(state.land < state.total_land) {
                state.land = state.land + 1;
                state.direction = 1;
            } 
        },
        left: (state, action)=> {
            if(state.land > 0) {
                state.land = state.land - 1;
                state.direction = -1;
            }
        }
    }
});

export default farmSlice;
export const {right, left} = farmSlice.actions;