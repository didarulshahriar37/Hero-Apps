import React, { lazy, Suspense, useState } from 'react';
import { useLoaderData } from 'react-router';
import { GridLoader } from 'react-spinners';
import AppNotFound from '../AppNotFound/AppNotFound';

const SingleApp = lazy(() => import('../SingleApp/SingleApp'));

const AppsPage = () => {

    const data = useLoaderData();

    const [search, setSearch] = useState('');
    const searchData = data.filter(app => app.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className='bg-base-200'>
            <div className='p-5 md:p-20'>
                <div className='text-center mb-10'>
                    <h2 className='text-2xl md:text-5xl font-semibold'>Our All Applications</h2>
                    <p className='mt-4 md:text-xl text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex flex-col md:flex-row md:justify-between gap-2 md:items-center mb-4'>
                    <div className='font-bold'>({searchData.length}) Apps found</div>
                    <div>
                        <label className="input bg-transparent w-[300px]">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" onChange={(s) => setSearch(s.target.value)} required placeholder="Search Apps" />
                        </label>
                    </div>
                </div>

                <Suspense fallback={<div className='mx-auto'><GridLoader></GridLoader></div>}>
                    {
                        searchData.length > 0 ? (<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                            {
                                searchData.map(singleApp => <SingleApp key={singleApp.id} singleApp={singleApp}></SingleApp>)
                            }
                        </div>) : <div className='w-full mx-auto'><AppNotFound></AppNotFound></div>
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default AppsPage;
