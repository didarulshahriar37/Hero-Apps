import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadImg from '../../assets/icon_downloads.png';
import ratingImg from '../../assets/icon_ratings.png';
import revImg from '../../assets/icon_review.png';
import AppNotFound from '../AppNotFound/AppNotFound';
import { addToLocalStorage } from '../../Utilities/addToLocalStorage';
import { toast } from 'react-toastify';

const AppDetails = () => {

    const [status, setStatus] = useState(true);

    const { id } = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    // console.log(data);
    const singleApp = data.find(app => app.id === appId);
    console.log(singleApp);
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads } = singleApp || {};
    
    const handleInstalledApp = (id) =>{
        addToLocalStorage(id);
        toast(`${singleApp.title} installed succesfully !`);
        setStatus(false);
    }

    if(!singleApp){
        return <AppNotFound></AppNotFound>
    }

    return (
        <div className='bg-base-200'>
            <div className='p-5 md:p-20'>
                <div className='flex flex-col items-center md:items-left md:flex-row gap-10 border-b-2 border-gray-300'>
                    <div>
                        <img className='md:mr-10 w-[350px] h-[330px] shadow-xl' src={image} alt="" />
                    </div>
                    <div className='w-full'>
                        <div className='border-b-2 border-gray-300'>
                            <h3 className='text-2xl font-bold mb-2'>{title}</h3>
                            <p className='mb-7 text-[#627382]'>Developed by <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>{companyName}</span></p>
                        </div>
                        <div className='grid grid-cols-3 gap-2 mt-7 md:flex md:items-center md:gap-6 mb-7'>
                            <div className='w-36'>
                                <img className='w-10 h-10 mb-2' src={downloadImg} alt="" />
                                <p className='mb-2'>Downloads</p>
                                <h2 className='text-3xl font-bold'>{downloads} M</h2>
                            </div>
                            <div className='w-36'>
                                <img className='w-10 h-10 mb-2' src={ratingImg} alt="" />
                                <p className='mb-2'>Average Ratings</p>
                                <h2 className='text-3xl font-bold'>{ratingAvg}</h2>
                            </div>
                            <div className='w-36'>
                                <img className='w-10 h-10 mb-2' src={revImg} alt="" />
                                <p className='mb-2'>Total Reviews</p>
                                <h2 className='text-3xl font-bold'>{reviews}</h2>
                            </div>
                        </div>
                        <div className='text-center md:text-start'>
                            {
                                status === true? <button onClick={() => handleInstalledApp(id)} className='btn bg-[#00D390] h-[52px] mb-10'><p className='text-white text-xl p-4'>Install Now ({size} MB)</p></button> : <button onClick={() => handleInstalledApp(id)} className='bg-[#22d39b] rounded-xl mb-10'><p className='text-white text-xl p-4'>Installed</p></button>
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold mt-10 mb-6'>Description</h3>
                    <p className='text-[#627382]'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;