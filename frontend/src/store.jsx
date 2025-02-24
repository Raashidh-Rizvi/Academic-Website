import {configureStore} from '@reduxjs/toolkit';
import menuToggleReducer from './features/menuToggle';

export const store= configureStore({
    reducer:{
        menuToggle:menuToggleReducer,
    }
})
