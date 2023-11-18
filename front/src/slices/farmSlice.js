import { createSlice } from '@reduxjs/toolkit'
import { animalValueObjMap } from './animalValueObjMap';

const farmSlice = createSlice({
    name: 'farm',
    initialState: {
        land: 0,
        total_land: 3,
        direction: 1,   
        mating: [],
        landInfo: {1: { info: null, value: null, img: []}, 2: { info: null, value: null, img: [], }, 
                   3: { info: null, value: null, img: [], },},

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
        updateNickName: (state, action)=> {
            const index = action.payload.index;
            if(state.landInfo[index].info)
                state.landInfo[index].info.name = action.payload.name;
        },
        updateAnimalInfo: (state, action)=> {
            const index = action.payload.index;
            state.landInfo[index].info = action.payload.animalInfo;
        },
        updateAnimalValue: (state, action)=> {
            const index = action.payload.index;
            const animalValue = action.payload.animalValue;
            state.landInfo[index].value = {};
            Object.keys(animalValue).forEach(key => {
                if(key === 'height' || key === 'width')
                    state.landInfo[index].value[key] = animalValue[key] * animalValue.w;
                else if(key === 'color')
                    state.landInfo[index].value[key] = animalValueObjMap[animalValue[key]][key];
                else if(key !== 'w') 
                    state.landInfo[index].value[key] = animalValueObjMap[animalValue[key]][key] * animalValue.w;
            });
            state.landInfo[index].img[0] = animalValue.w_body;
            state.landInfo[index].img[1] = animalValue.w_head;
            state.landInfo[index].img[2] = animalValue.w_tail;
            state.landInfo[index].img[3] = animalValue.w_f_leg;
            state.landInfo[index].img[4] = animalValue.w_b_leg;
            state.landInfo[index].img[5] = animalValue.w_wing;
            state.landInfo[index].img[6] = animalValue.w_body;
            state.landInfo[index].img[7] = animalValue.w_head;
            state.landInfo[index].img[8] = animalValue.w_tail;
            state.landInfo[index].img[9] = animalValue.w_f_leg;
            state.landInfo[index].img[10] = animalValue.w_b_leg;
            state.landInfo[index].img[11] = animalValue.w_wing;
        },
        emptyLandByNum: (state, action)=> {
            if(action.payload === 1) {
                state.landInfo[1].value = null;
                state.landInfo[1].info = null;
                state.landInfo[1].img = [];
            } else if(action.payload === 2) {
                state.landInfo[2].value = null;
                state.landInfo[2].info = null;
                state.landInfo[2].img = [];
            } else if(action.payload === 3) {
                state.landInfo[3].value = null;    
                state.landInfo[3].info = null;
                state.landInfo[3].img = [];
            }    
        },
        playWithAnimal: (state, action)=> {
            if(state.landInfo[action.payload].info.enjoy < 5)
                state.landInfo[action.payload].info.enjoy += 1;
        },
        feedAnimal: (state, action)=> {
            if(state.landInfo[action.payload].info.feed < 5)
                state.landInfo[action.payload].info.feed += 1;
        },   
        cleanAnimal: (state, action)=> {
            if(state.landInfo[action.payload].info.clean < 5)
                state.landInfo[action.payload].info.clean += 1;
        },    
        matingAnimal: (state, action)=> {
            if(state.mating.length < 2) {
                state.mating.push(action.payload);
                state.landInfo[action.payload].info.state = "mating";
            }
        }  
    }
});

export default farmSlice;
export const {right, left} = farmSlice.actions;
export const {updateNickName, updateAnimalValue, updateAnimalInfo, emptyLandByNum} = farmSlice.actions;
export const {playWithAnimal, feedAnimal, cleanAnimal, matingAnimal} = farmSlice.actions;
