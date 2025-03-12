import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function AllCarPage() {


    const cars = useSelector(state => state.cars.cars);


    return (
      
      
      <div>
        <div className='flex flex-row justify-center flex-wrap '>
            
        {cars.length === 0 ? <p>No cars available</p> : (
          cars.map((car) => (
            <div key={car.id}
          className='rounded-lg m-8 w-fit p-4 flex bg-gradient-to-l from-[#ffffeb] to-[#156d92]'>

            <div className='w-50 rounded-md p-0.5 mr-4'>  
              {car.image && <img src={car.image} alt={car.name}className='rounded-md' />}
              </div>
                    <div className='bg-[#071019] h-full min-w-40 p-4 rounded-2xl relative'>
                    
                    <h4 className='font-bold text-xl'>{car.name}</h4>
                    <br />
                    <h4>₹{car.price}</h4>
                    


                    <Link to={`/car/${car.id}`} className='absolute bottom-0'>View Details</Link>
                    </div>
          </div>
        ))
      )}        



{/*  */}

        </div>
    </div>
     );
}

export default AllCarPage;