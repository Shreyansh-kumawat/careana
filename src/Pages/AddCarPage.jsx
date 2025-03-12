import React,{ useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addCar} from '../redux/carSlice';
import { useNavigate } from 'react-router-dom';


function AddCarPage() {

    const dispatch = useDispatch();
    const [car, setCar] = useState({ name: '', price: '', mileage: '',seating: '', description: '', manufacturing: '', image: ''})
     const navigate = useNavigate();

     const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                localStorage.setItem('uploadedCarImage', reader.result);
                setCar({ ...car, image: reader.result });
            };
            reader.readAsDataURL(file); 
        }
    };

   
    
  


      

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!car.name || !car.price || !car.image) {
            alert("Name, Price, and Image are required!");
            return;
        }
    
        console.log("🚗 Car Data Before Dispatch: ", car); // Check krne k liye
    
        dispatch(addCar({ ...car, id: Date.now() }));
    
        navigate("/admin-dashboard");
    };
    
    return (
    <div className='bg-[#000b47] p-6'>
        <h2 className='text-3xl font-bold font-sans'>Add Car</h2>
        <br />

    <input type="text" 
    placeholder="Car Name" 
    onChange={(e) => 
    setCar({ ...car, name: e.target.value })} 
    required
    className='bg-[#000000] p-1 rounded-md border-white border-1 m-1'
    />
    <br />

    <input type="text" 
    placeholder="Price" 
    onChange={(e) => 
    setCar({ ...car, price: e.target.value })} 
    className='bg-[#000000] p-1 rounded-md border-white border-1 m-1'
    />
    <br />

    <input type="text" 
    placeholder="mileage" 
    onChange={(e) => 
    setCar({ ...car, mileage: e.target.value })}
    className='bg-[#000000] p-1 rounded-md border-white border-1 m-1'
    />
    <br />

    <input type="text" 
    placeholder="seating" 
    onChange={(e) => 
    setCar({ ...car, seating: e.target.value })}
    className='bg-[#000000] p-1 rounded-md border-white border-1 m-1'
    />
    <br />

    <input type="text" 
    placeholder="description" 
    onChange={(e) => 
    setCar({ ...car, description: e.target.value })} 
    className='bg-[#000000] p-1 rounded-md border-white border-1 m-1'
    />
    <br />

    <input type="date" 
    placeholder="Manufacturing Year" 
    onChange={(e) => 
    setCar({ ...car, manufacturing: e.target.value })} 
    className='bg-[#000000] p-1 rounded-md border-white border-1 m-1'
    />
    <br />
    
<input type="file" name='imahe' accept="image/*" onChange={handleImageUpload}/>

<button onClick={handleSubmit} 
className='bg-[#00e741] p-2 rounded-2xl text-xl font-bold text-black font-mono cursor-pointer'
>+Car</button>


{car.image && 
<img src={car.image} alt="Preview" width="100"/>
}

    </div>
    );
}

export default AddCarPage;