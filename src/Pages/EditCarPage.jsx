import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateCar } from '../redux/carSlice'


function EditCarPage() {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const car = useSelector(state => state.cars.cars.find(car => car.id.toString() === id));

    const [updatedCar, setUpdatedCar] = useState(car);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCar(updatedCar));
        navigate('/admin-dashboard');

    }


    return (
        <div className='bg-[#0e0029] p-6'>
            <h2 className='text-3xl font-bold font-serif'>Edit {updatedCar.name}</h2>

            {car.image && <img src={car.image} alt={car.name} width="150" />}
            <br />
            <br />

            <label>Name: </label>
            <br />
            <input type="text"
                value={updatedCar.name}
                className='bg-[#000000] p-1 rounded-md border-white border-1 m-1'
                onChange={e => setUpdatedCar({ ...updatedCar, name: e.target.value })} />
            <br />
            <br />

            <label>Price: </label>
            <br />
            <input type="text"
                value={updatedCar.price}
                className='bg-[#000000] p-1 rounded-md border-white border-1 m-1'
                onChange={e => setUpdatedCar({ ...updatedCar, price: e.target.value })} />
            <br />
            <br />

            <label>Seating: </label>
            <br />
            <input type="text"
                value={updatedCar.seating}
                className='bg-[#000000] p-1 rounded-md border-white border-1 m-1'
                onChange={e => setUpdatedCar({ ...updatedCar, seating: e.target.value })} />
            <br />
            <br />

            <label>Mileage: </label>
            <br />
            <input type="text"
                value={updatedCar.mileage}
                className='bg-[#000000] p-1 rounded-md border-white border-1 m-1'
                onChange={e => setUpdatedCar({ ...updatedCar, mileage: e.target.value })} />
            <br />
            <br />

            <label>Description: </label>
            <br />
            <input type="text"
                value={updatedCar.description}
                className='bg-[#000000] p-1 rounded-md border-white border-1 m-1'
                onChange={e => setUpdatedCar({ ...updatedCar, description: e.target.value })} />
            <br />
            <br />
            <label>Date of Manufacturing: </label>
            <input type="date"
                value={updatedCar.manufacturing}
                className='bg-[#000000] p-1 rounded-md border-white border-1 m-1'
                onChange={e => setUpdatedCar({ ...updatedCar, manufacturing: e.target.value })} />
            <br /><br />
            <button onClick={handleSubmit}
                className='bg-[#00e741] p-2 rounded-2xl text-xl font-bold text-black font-mono cursor-pointer'
            >Update Car</button>

        </div>
    );
}

export default EditCarPage;