import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { animalValueObjMap } from '../data/animalValueObjMap';
import { getFarmInfo } from '../APIs/getApi';
import { updateAnimCond, updateBreeding, updateBuyLand, updateFarmThruBuy, updateFarmThruSell } from '../APIs/putApi';

const fetchUpdateFarm = createAsyncThunk(
    'farm/fetchUpdateFarm',
    async() => {
        const res = await getFarmInfo();
        // console.log(res);
        return res;
    }
)
const fetchBuyAnimal = createAsyncThunk(
    'farm/fetchBuyAnimal',
    async({num, land}) => {
        const res = await updateFarmThruBuy(num, land);
        // console.log(res);
        return res;
    }
)
const fetchSellAnimal = createAsyncThunk(
    'farm/fetchSellAnimal',
    async(land) => {
        const res = await updateFarmThruSell(land);
        // console.log(res);
        return res;
    }
)
const fetchBuyLand = createAsyncThunk(
    'farm/fetchBuyLand',
    async() => {
        const res = await updateBuyLand();
        // console.log(res);
        return res;
    }
)
const fetchAnimCond = createAsyncThunk(
    'farm/fetchAnimCond',
    async({order, land, nickName}) => {
        const res = await updateAnimCond(order, land, nickName);
        // console.log(res);
        return res;
    }
)
const fetchBreeding = createAsyncThunk(
    'farm/fetchBreeding',
    async(mating) => {
        const res = await updateBreeding(mating);
        // console.log(res);
        return res;
    }
)

const farmSlice = createSlice({
    name: 'farm',
    initialState: {
        status: 'idle',
        currentRequestId: undefined,
        error: null,
        owned_land: 3, 
        mating: [],
        did_breed: false,
        landInfo: {1: { info: null, value: null, img: []},   2: { info: null, value: null, img: [], },  3: { info: null, value: null, img: [],},  4: {info: null, value: null, img: [], },   5: {info: null, value: null, img: [], }, 
                   6: { info: null, value: null, img: []},   7: { info: null, value: null, img: [], },  8: { info: null, value: null, img: [] },  9: { info: null, value: null, img: [], }, 10: {info: null, value: null, img: [], }, 
                   11: { info: null, value: null, img: []}, 12: { info: null, value: null, img: [], }, 13: { info: null, value: null, img: [] }, 14: { info: null, value: null, img: [], }, 15: {info: null, value: null, img: [], }, 
                   16: { info: null, value: null, img: []}, 17: { info: null, value: null, img: [], }, 18: { info: null, value: null, img: [] }, 19: { info: null, value: null, img: [], }, 20: {info: null, value: null, img: [], },    
                },
    },
    reducers: {
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
            state.landInfo[action.payload].value = null;    
            state.landInfo[action.payload].info = null;
            state.landInfo[action.payload].img = [];
            
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
        breeding: (state, action) => {
            state.did_breed = true;
        },
        clearBreeding: (state, action) => {
            state.did_breed = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUpdateFarm.pending, (state,action)=>{
            state.status = 'pending';
            state.currentRequestId = action.meta.requestId;
        });
        builder.addCase(fetchUpdateFarm.fulfilled, (state,action)=>{
            state.status = 'idle';
            state.currentRequestId = undefined;
            if(action.payload.success) {
                state.owned_land = action.payload.object.owned_land;
                state.mating = action.payload.object.mating;
                // state.landInfo = action.payload.object.landInfo;
            }
        });
        builder.addCase(fetchUpdateFarm.rejected, (state,action)=>{
            state.status = 'idle';
            state.error = action.error;
            state.currentRequestId = undefined;
        });


        builder.addCase(fetchBuyAnimal.pending, (state,action)=>{
            state.status = 'pending';
            state.currentRequestId = action.meta.requestId;
        });
        builder.addCase(fetchBuyAnimal.fulfilled, (state,action)=>{
            state.status = 'idle';
            state.currentRequestId = undefined;

            // 구매에 따른 변경된 landInfo를 업데이트
        });
        builder.addCase(fetchBuyAnimal.rejected, (state,action)=>{
            state.status = 'idle';
            state.error = action.error;
            state.currentRequestId = undefined;
        });
        

        builder.addCase(fetchSellAnimal.pending, (state,action)=>{
            state.status = 'pending';
            state.currentRequestId = action.meta.requestId;
        });
        builder.addCase(fetchSellAnimal.fulfilled, (state,action)=>{
            state.status = 'idle';
            state.currentRequestId = undefined;

            // 판매에 따른 변경된 landInfo를 업데이트
        });
        builder.addCase(fetchSellAnimal.rejected, (state,action)=>{
            state.status = 'idle';
            state.error = action.error;
            state.currentRequestId = undefined;
        });
                

        builder.addCase(fetchBuyLand.pending, (state,action)=>{
            state.status = 'pending';
            state.currentRequestId = action.meta.requestId;
        });
        builder.addCase(fetchBuyLand.fulfilled, (state,action)=>{
            state.status = 'idle';
            state.currentRequestId = undefined;
            if(action.payload.success) {
                state.owned_land = action.payload.object;
            }
        });
        builder.addCase(fetchBuyLand.rejected, (state,action)=>{
            state.status = 'idle';
            state.error = action.error;
            state.currentRequestId = undefined;
        });
                        

        builder.addCase(fetchAnimCond.pending, (state,action)=>{
            state.status = 'pending';
            state.currentRequestId = action.meta.requestId;
        });
        builder.addCase(fetchAnimCond.fulfilled, (state,action)=>{
            state.status = 'idle';
            state.currentRequestId = undefined;
            // 동물 컨디션 업데이트
        });
        builder.addCase(fetchAnimCond.rejected, (state,action)=>{
            state.status = 'idle';
            state.error = action.error;
            state.currentRequestId = undefined;
        });

        builder.addCase(fetchBreeding.pending, (state,action)=>{
            state.status = 'pending';
            state.currentRequestId = action.meta.requestId;
        });
        builder.addCase(fetchBreeding.fulfilled, (state,action)=>{
            state.status = 'idle';
            state.currentRequestId = undefined;
            state.did_breed = true;
        });
        builder.addCase(fetchBreeding.rejected, (state,action)=>{
            state.status = 'idle';
            state.error = action.error;
            state.currentRequestId = undefined;
        });
      }
});

export default farmSlice;
export { fetchUpdateFarm, fetchBuyAnimal, fetchSellAnimal, fetchBuyLand, fetchAnimCond, fetchBreeding };
export const {landUpdate} = farmSlice.actions;
export const {updateNickName, updateAnimalValue, updateAnimalInfo, emptyLandByNum} = farmSlice.actions;
export const {/*playWithAnimal, feedAnimal, cleanAnimal,*/ breeding, clearBreeding, matingAnimal, cancelMatingAnimal} = farmSlice.actions;
