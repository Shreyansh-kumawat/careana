import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: JSON.parse(localStorage.getItem('cars')) || [],
};

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.cars.push(action.payload);
      localStorage.setItem('cars', JSON.stringify(state.cars));
    },
    deleteCar: (state, action) => {
      state.cars = state.cars.filter(car => car.id !== action.payload);
      localStorage.setItem('cars', JSON.stringify(state.cars));
    },
    updateCar: (state, action)=>{
      state.cars = state.cars.map(car => car.id === action.payload.id ? action.payload : car);
      localStorage.setItem('cars', JSON.stringify(state.cars))
    }
  },
});

export const { addCar, deleteCar, updateCar } = carSlice.actions;
export default carSlice.reducer;
