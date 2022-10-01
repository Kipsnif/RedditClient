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
            state.subs = stateArr.filter(function ([key, value]) {
                return value !== action.value;
            })

        }
    }
})


export const { addSub, removeSub } = subsSlice.actions;

export const selectSubs = (state) => state.subs.subs;

export default subsSlice.reducer;
