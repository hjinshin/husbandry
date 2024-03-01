import { createSlice } from '@reduxjs/toolkit'


const settingSlice = createSlice({
    name: 'setting',
    initialState: {
        bgm: 50,
        sfx: 50,
        option_modal: false,
        buy_modal: false,
        mating_modal: false,
        sell_modal: false,
        tamer_normal_modal: false,
        tamer_unnormal_modal: false,
        tamer_rare_modal: false,
        tamer_legendary_modal: false,
        tamer_fillout_modal: false,
        tamer_draw_result_modal: false,
        tamer_poverty_modal: false,
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
            state.option_modal = !state.option_modal;
        },
        buyModal: (state, action)=> {
            state.buy_modal = !state.buy_modal;
        },
        matingModal: (state, action)=> {
            state.mating_modal = !state.mating_modal;
        },
        sellModal: (state, action)=> {
            state.sell_modal = !state.sell_modal;
        },
        tamerModal: (state, action)=> {
            if(action.payload === 1) {
                state.tamer_normal_modal = !state.tamer_normal_modal;
            } else if(action.payload === 2) {
                state.tamer_unnormal_modal = !state.tamer_unnormal_modal;
            } else if(action.payload === 3) {
                state.tamer_rare_modal = !state.tamer_rare_modal;    
            } else if(action.payload === 4) {
                state.tamer_legendary_modal = !state.tamer_legendary_modal;
            }
        },
        tamerFillOutModal: (state, action)=> {
            state.tamer_fillout_modal = !state.tamer_fillout_modal;
        },
        tamerDrawResultModal: (state, action)=> {
            state.tamer_draw_result_modal = !state.tamer_draw_result_modal;
        },
        tamerPovertyModal: (state, action)=> {
            state.tamer_poverty_modal = !state.tamer_poverty_modal;
        },
    }
});

export default settingSlice;
export const {bgmRaise, bgmLower, sfxRaise, sfxLower} = settingSlice.actions;
export const {optionModal, buyModal, matingModal, sellModal, tamerModal, tamerFillOutModal, tamerDrawResultModal, tamerPovertyModal} = settingSlice.actions;