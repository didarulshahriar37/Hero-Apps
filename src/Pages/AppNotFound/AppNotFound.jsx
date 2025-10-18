import React from 'react';
import appErrorImg from '../../assets/App_Error.png';
import { Link } from 'react-router';

const AppNotFound = () => {
    return (
        <div className='bg-base-200 md:p-20 p-5 text-center'>
            <img className='mx-auto' src={appErrorImg} alt="" />
            <h2 className='mt-6 text-5xl font-bold mb-6'>OPPS!! APP NOT FOUND</h2>
            <p className='text-[#627382] mb-6'>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to='/'><button className='btn w-[150px] h-12 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold'>Go Back!</button></Link>
        </div>
    );
};

export default AppNotFound;