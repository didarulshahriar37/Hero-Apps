import React, { lazy, Suspense } from 'react';
import { useLoaderData } from 'react-router';
import { GridLoader } from 'react-spinners';

const App = lazy(() => import('../App/App'));

const AppsPage = () => {

    const data = useLoaderData();

    return (
        <div className='bg-base-200'>
            <div className='p-5 md:p-20'>
                <div className='text-center mb-10'>
                    <h2 className='text-2xl md:text-5xl font-semibold'>Our All Applications</h2>
                    <p className='mt-4 md:text-xl text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex flex-col md:flex-row md:justify-between gap-2 md:items-center mb-4'>
                    <div className='font-bold'>({data.length}) Apps found</div>
                    <div>
                        <input className='px-4 py-3 w-96 border-1 border-gray-400 rounded-xl' type="search" placeholder='Search Apps' name="" id="" />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <Suspense fallback={<div className='mx-auto'><GridLoader></GridLoader></div>}>
                        {
                            data.map(singleApp => <App key={singleApp.id} singleApp={singleApp}></App>)
                        }
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default AppsPage;