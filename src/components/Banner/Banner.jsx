import React from 'react';
import playStore from '../../assets/play_store.png';
import appStore from '../../assets/app_store.png';
import heroImg from '../../assets/hero.png';

const Banner = () => {
    return (
        <div className=''>
            <div className='text-center p-5 md:p-20'>
                <div>
                    <h2 className='text-4xl md:text-7xl font-bold'>We Build<br /><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Productive</span> Apps</h2>
                    <p className='mt-4 text-[#627382] md:text-xl'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='flex flex-col md:flex-row justify-center gap-4 mt-5 md:mt-10'>
                    <div>
                        <a href="https://play.google.com/"><button className='btn px-6 py-3 font-semibold text-xl border-[#D2D2D2]'><img className='w-6 h-6 mr-2' src={playStore} alt="" />Google Play</button></a>
                    </div>
                    <div>
                        <a href="https://www.apple.com/app-store/"><button className='btn px-6 py-3 font-semibold text-xl border-[#D2D2D2]'><img className='w-6 h-6 mr-2' src={appStore} alt="" />App Store</button></a>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <div>
                    <img className='mx-auto' src={heroImg} alt="" />
                </div>
                <div className='w-full md:p-20 p-5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                    <div>
                        <h3 className='text-2xl md:text-5xl font-semibold text-white'>Trusted by Millions, Built for You</h3>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center gap-6 mt-4 md:mt-10'>
                        <div className='text-white border-1 border-white shadow-md md:shadow-none md:border-none rounded-3xl py-4 px-20'>
                            <p className='mb-1 md:mb-4'>Total Downloads</p>
                            <h1 className='text-5xl font-bold'>29.6M</h1>
                            <p className='mt-1 md:mt-4'>21% more than last month</p>
                        </div>
                        <div className='text-white border-1 border-white shadow-md md:shadow-none md:border-none rounded-3xl py-4 px-20'>
                            <p className='mb-1 md:mb-4'>Total Reviews</p>
                            <h1 className='text-5xl font-bold'>906K</h1>
                            <p className='mt-1 md:mt-4'>46% more than last month</p>
                        </div>
                        <div className='text-white border-1 border-white md:border-none shadow-md md:shadow-none rounded-3xl py-4 px-20'>
                            <p className='mb-1 md:mb-4'>Active Apps</p>
                            <h1 className='text-5xl font-bold'>132+</h1>
                            <p className='mt-1 md:mt-4'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;