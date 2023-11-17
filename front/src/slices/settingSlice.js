import { createSlice } from '@reduxjs/toolkit'


const settingSlice = createSlice({
    name: 'setting',
    initialState: {
        bgm: 50,
        sfx: 50,
        option_modal: false,
        buy_modal: false,
    },
    reducers: {
        bgmRaise: (state, action)=> {
            if(state.bgm < 100)     state.bgm += 10;
        },
        bgmLower: (state, action)=> {
            if(state.bgm > 0)     state.bgm -= 10;
        },
        sfxRaise: (state, action)=> {
            if(state.sfx < 100)     state.sfx += 10;
        },
        sfxLower: (state, action)=> {
            if(state.sfx > 0)     state.sfx -= 10;
        },
        optionModal: (state, action)=> {
            state.option_modal = action.payload;
        },
        buyModal: (state, action)=> {
            state.buy_modal = action.payload;
        },
    }
});

export default settingSlice;
export const {bgmRaise, bgmLower, sfxRaise, sfxLower} = settingSlice.actions;
export const {optionModal, buyModal} = settingSlice.actions;