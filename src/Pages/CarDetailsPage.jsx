import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function CarDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    

    const car = useSelector(state => state.cars.cars.find(car => car.id.toString() === id));

    const back=(e)=>{
        e.preventDefault();
        navigate('/');
    }


    if (!car) {
        return <h2>Car Not Found</h2>;
      }

    return ( 

        <div>

            <button onClick={back} className='bg-white  text-3xl text-black rounded-lg p-2 m-4 cursor-pointer'>
                Back
            </button>


    <div className='bg-[#e5e5e5] w-full p-1 rounded-2xl cursor-default'>


                <div className='bg-gradient-to-l from-[#eaffdd] to-[#090237] rounded-2xl p-6 flex'>
                    {car.image && <img src={car.image} alt={car.name} width="400"/>}

                    <div className='flex flex-col bg-gray-950 h-fit p-4 rounded-lg 
                    gap-2'>

                    <h4 className='text-2xl font-extrabold'>{car.name}</h4>
                    <br />
                    <h4 className='text-lg font-bold text-[#fbf99c]'>₹{car.price}</h4>
                    <h4>{car.mileage} km/l Mileage</h4>
                    <h4>{car.seating} Seater</h4>
                    <h4>Year- {car.manufacturing}</h4>
                    <h4>{car.description}</h4>

                    </div>

                </div>

        
    </div>
    </div>
    
     );
}

export default CarDetailsPage  ;