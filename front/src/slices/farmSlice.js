import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { animalValueObjMap } from '../data/animalValueObjMap';
import { getFarmInfo } from '../APIs/getApi';

const fetchUpdateFarm = createAsyncThunk(
    'farm/fetchUpdateFarm',
    async() => {
        const res = await getFarmInfo();
        console.log(res);
        return res;
    }
)

const farmSlice = createSlice({
    name: 'farm',
    initialState: {
        status: 'idle',
        currentRequestId: undefined,
        error: null,
        land: 0,
        total_land: 20,
        owned_land: 3,
        direction: 1,   
        mating: [],
        landInfo: {1: { info: null, value: null, img: []},   2: { info: null, value: null, img: [], },  3: { info: null, value: null, img: [],},  4: {info: null, value: null, img: [], },   5: {info: null, value: null, img: [], }, 
                   6: { info: null, value: null, img: []},   7: { info: null, value: null, img: [], },  8: { info: null, value: null, img: [] },  9: { info: null, value: null, img: [], }, 10: {info: null, value: null, img: [], }, 
                   11: { info: null, value: null, img: []}, 12: { info: null, value: null, img: [], }, 13: { info: null, value: null, img: [] }, 14: { info: null, value: null, img: [], }, 15: {info: null, value: null, img: [], }, 
                   16: { info: null, value: null, img: []}, 17: { info: null, value: null, img: [], }, 18: { info: null, value: null, img: [] }, 19: { info: null, value: null, img: [], }, 20: {info: null, value: null, img: [], },    
                },
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
        teleport: (state, action)=> {
            if(state.land <= action.payload)
                state.direction = 1;
            else state.direction = -1;
            state.land = action.payload;
        },
        updateNickName: (state, action)=> {
            const index = action.payload.index;
            if(state.landInfo[index].info)
                state.landInfo[index].info.nickname = action.payload.nickname;
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
        },
        cancelMatingAnimal: (state, action)=> {
            state.landInfo[action.payload].info.state = "exist";
            const updateList = state.mating.filter((value) => value !== action.payload);
            state.mating = updateList;
        },
        landUpdate: (state, action) => {
            state.owned_land += 1;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUpdateFarm.pending, (state,action)=>{
            if(state.status === 'idle') {
                state.status = 'pending';
                state.currentRequestId = action.meta.requestId
            }
        })
        builder.addCase(fetchUpdateFarm.fulfilled, (state,action)=>{
            const { requestId } = action.meta;
            if(state.status === 'pending' && state.currentRequestId === requestId) {
                state.status = 'idle';
                state.owned_land = action.payload.owned_land;
                state.mating = action.payload.mating;
                // state.landInfo = action.payload.landInfo;
                state.currentRequestId = undefined;
            }
        })
        builder.addCase(fetchUpdateFarm.rejected, (state,action)=>{
            const { requestId } = action.meta;
            if(state.status === 'pending' && state.currentRequestId === requestId) {
                state.status = 'idle';
                state.error = action.error;
                state.currentRequestId = undefined;
            }
        })
      }
});

export default farmSlice;
export { fetchUpdateFarm };
export const {right, left, teleport, landUpdate} = farmSlice.actions;
export const {updateNickName, updateAnimalValue, updateAnimalInfo, emptyLandByNum} = farmSlice.actions;
export const {playWithAnimal, feedAnimal, cleanAnimal, matingAnimal, cancelMatingAnimal} = farmSlice.actions;
