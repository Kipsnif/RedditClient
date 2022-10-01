import { configureStore } from '@reduxjs/toolkit';
import subsReducer from '../Components/subs/subsSlice';


export default configureStore({
    reducer: {
        subs: subsReducer,
        
    },
});
