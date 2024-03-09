import { createSlice } from '@reduxjs/toolkit'


const settingSlice = createSlice({
    name: 'setting',
    initialState: {
        land: 0,
        total_land: 20,
        direction: 1,   
        bgm: 50,
        sfx: 50,
        option_modal: false,
        buy_modal: false,
        mating_modal: false,
        sell_modal: false,
        bring_modal: false,
        tamer_normal_modal: false,
        tamer_unnormal_modal: false,
        tamer_rare_modal: false,
        tamer_legendary_modal: false,
        tamer_fillout_modal: false,
        tamer_draw_result_modal: false,
        tamer_poverty_modal: false,
        animal_list:["worm", "chicken",],
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
        bringModal: (state, action)=> {
            state.bring_modal = !state.bring_modal;
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
export const {right, left, teleport } = settingSlice.actions;
export const {bgmRaise, bgmLower, sfxRaise, sfxLower} = settingSlice.actions;
export const {optionModal, buyModal, matingModal, sellModal, bringModal, tamerModal, tamerFillOutModal, tamerDrawResultModal, tamerPovertyModal} = settingSlice.actions;