import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import carReducer from './carSlice';


const store = configureStore({
    reducer:{
        auth: authReducer,
        cars: carReducer
        
    }
})

export default store;