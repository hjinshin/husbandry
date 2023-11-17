import { createSlice } from '@reduxjs/toolkit'
import { animalValueObjMap } from './animalValueObjMap';

const farmSlice = createSlice({
    name: 'farm',
    initialState: {
        land: 0,
        total_land: 3,
        direction: 1,
        land1: {
            value: null,
            img: [],
        }

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
        },
        updateLand1: (state, action)=> {
            state.land1.value = {};
            Object.keys(action.payload).forEach(key => {
                if(key === 'price')
                    state.land1.value[key] = action.payload[key]
                else if(key === 'height' || key === 'width')
                    state.land1.value[key] = action.payload[key] * action.payload.w;
                else if(key === 'color')
                    state.land1.value[key] = animalValueObjMap[action.payload[key]][key];
                else if(key !== 'w') 
                    state.land1.value[key] = animalValueObjMap[action.payload[key]][key] * action.payload.w;
            });
            state.land1.img[0] = action.payload.w_body;
            state.land1.img[1] = action.payload.w_head;
            state.land1.img[2] = action.payload.w_tail;
            state.land1.img[3] = action.payload.w_f_leg;
            state.land1.img[4] = action.payload.w_b_leg;
            state.land1.img[5] = action.payload.w_wing;
            state.land1.img[6] = action.payload.w_body;
            state.land1.img[7] = action.payload.w_head;
            state.land1.img[8] = action.payload.w_tail;
            state.land1.img[9] = action.payload.w_f_leg;
            state.land1.img[10] = action.payload.w_b_leg;
            state.land1.img[11] = action.payload.w_wing;
        },
        emptyLandByNum: (state, action)=> {
            if(action.payload === 1) {
                state.land1.value = null;
                state.land1.img = [];
            } else if(action.payload === 2) {
                state.land2.value = null;
                state.land2.img = [];
            } else if(action.payload === 3) {
                state.land3.value = null;    
                state.land3.img = [];
            }    
        },
    }
});

export default farmSlice;
export const {right, left} = farmSlice.actions;
export const {updateLand1, emptyLandByNum} = farmSlice.actions;