import React from 'react';
import Banner from '../../components/Banner/Banner';
import { Link, useLoaderData } from 'react-router';
import Apps from '../Apps/Apps';

const Home = () => {

    const data = useLoaderData();

    return (
        <div className='bg-base-200'>
            <Banner></Banner>
            <div className='p-5 md:p-20'>
                <div className='text-center mb-5 md:mb-10'>
                    <h2 className='text-2xl md:text-5xl font-semibold'>Trending Apps</h2>
                    <p className='mt-4 md:text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='mb-5 md:mb-10'>
                    <Apps data={data}></Apps>
                </div>
                <div className='text-center'>
                    <Link to='/apps'><button className='btn w-36 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold'>Show All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;