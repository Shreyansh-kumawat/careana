import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAdmin : localStorage.getItem('isAdmin') === 'true' || false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginAsAdmin: (state)=>{
            state.isAdmin = true;
            localStorage.setItem('isAdmin', 'true')
        },
        logoutAdmin: (state) => {
        state.isAdmin = false;
        localStorage.removeItem('isAdmin');
      },
    }
})  ;



export const { loginAsAdmin, logoutAdmin } = authSlice.actions;
export default authSlice.reducer;

