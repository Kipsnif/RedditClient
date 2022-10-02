import { createSlice } from "@reduxjs/toolkit";


const subsSlice = createSlice({
    name: 'subs',
    initialState: {
        subs: {
            worldnews: '/worldnews',
            aww: '/aww',
            pics: '/pics',
            movies: '/movies'
        }
    },
    reducers: {
        addSub(state, action) {
            state.subs[action.payload] = '/' + action.payload
        },
        removeSub(state, action) {
            const stateArr = Object.entries(state.subs);
            const filtered = stateArr.filter(function ([key, value]) {
                return key !== action.payload;
            })
            state.subs = Object.fromEntries(filtered);
        }
    }
})


export const { addSub, removeSub } = subsSlice.actions;

export const selectSubs = (state) => state.subs.subs;

export default subsSlice.reducer;
