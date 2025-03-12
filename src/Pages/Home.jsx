import React from 'react';
import AllCarPage from './AllCarPage'

function Home() {
    return (
        <div className='bg-[#15171d] overflow-scroll flex justify-center rounded-t-2xl rounded-b-md' style={{ width: '96vw', height: '90vh' }}>

            <div className='w-full h-fit' >
                <div className='w-full h-90 overflow-hidden relative'>
                    <h1 className='absolute top-1 left-1 bg-[#1683ff] p-4 text-3xl rounded-lg font-extrabold'>CarArena🏎️</h1>

                    <img src="../src/images/banner-jaguarxj.png" alt="image load error" className='w-400' />

                    
                </div>

                <div className=' w-full h-fit flex  p-3 flex-col items-center gap-10 '>
                    <p className='text-3xl font-bold' id='font1'>Best Modified Cars Ever</p>
                   


                    {/* cars Menu */}
                    <div className='w-full h-fit'>
                    
                    <AllCarPage />
                        {/* <CarCard /> */}
                    </div>

                </div>


            </div>
        </div>
    );
}

export default Home;