import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAdmin } from '../redux/authSlice';
import { Link } from 'react-router-dom';
import { deleteCar } from '../redux/carSlice'


function AdminDashboard() {
    const cars = useSelector(state => state.cars.cars);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutAdmin());
        window.location.href = '/';

    }

    return (
        <div className='bg-[#2a2d2a] w-full h-full p-8 rounded-2xl gap-5 overflow-scroll'>

            <div className='flex gap-4'>
        <h2 className='text-xl font-mono font-bold bg-emerald-100 text-black p-1 rounded-lg h-fit'>Admin Dashboard</h2>
        <button onClick={handleLogout} className='text-2xl font-mono font-bold bg-[#ff2c2c] text-white p-2 rounded-lg mb-10 cursor-pointer'>Logout</button>

            </div>


        <Link to="/add-car" className='bg-[#62ff5a] p-2 rounded-2xl text-2xl font-bold text-black font-sans'>+New Car</Link>
        <br /><br />
        <br />
        <h2 className='font-bold'>Existing Cars:</h2>

        <div className='flex flex-wrap bg-[#181818] p-3 rounded-2xl overflow-scroll h-120 w-350'>
            {cars.length === 0 ? <h3>No Car is in Stock</h3> : (
                cars.map(car => (

                    <div key={car.id} className='gap-10 bg-[#000] p-6 rounded-lg mb-5 w-full'>

                        {car.image && <img src={car.image} alt={car.name} width="150" />}
                    <div className='bg-[#292732] p-2 rounded-md'>
                        <h4 className='font-bold font-mono text-2xl'>{car.name}</h4>
                        <br />
                        <h4 className='text-lg font-mono'>₹{car.price}</h4>
                        <h4 className='text-lg font-mono'>{car.mileage} km/l Mileage</h4>
                        <h4 className='text-lg font-mono'>{car.seating} Seater</h4>
                        <h4 className='text-lg font-mono'>{car.description}</h4>
                        <h4 className='text-lg font-mono'>{car.manufacturing}</h4>

                        </div> 
                        <br />
                        <Link to={`/edit-car/${car.id}`} className='bg-[#78ff5a]
                         text-black p-1 rounded-sm font-bold mb-2'>Edit Details</Link>
                        <br />
                        <button onClick={() => dispatch(deleteCar(car.id))} className='bg-[#ff4444]
                         text-black p-1 rounded-sm font-bold mt-2 cursor-pointer'>Remove Car</button>
                    </div>
                ))
            )}
        </div>

    </div>);
}

export default AdminDashboard;