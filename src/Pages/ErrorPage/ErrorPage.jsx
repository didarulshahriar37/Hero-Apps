import React from 'react';
import errorImg from '../../assets/error_404.png';
import Navbar from '../../components/Header/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='bg-base-200'>
            <title>404 Error - Page not found</title>
            <Navbar></Navbar>
            <div className='md:p-20 p-5 text-center'>
                <img className='mx-auto' src={errorImg} alt="" />
                <h2 className='mt-6 text-5xl font-bold mb-6'>Oops, page not found!</h2>
                <p className='text-[#627382] mb-6'>The page you are looking for is not available.</p>
                <Link to='/'><button className='btn w-[150px] h-12 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold'>Go Back!</button></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;