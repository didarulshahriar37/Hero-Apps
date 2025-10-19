import React, { lazy, Suspense } from 'react';
import { GridLoader } from 'react-spinners';

const SingleApp = lazy(() => import('../SingleApp/SingleApp'));

const Apps = ({ data }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <Suspense fallback={<div className='mx-auto'><GridLoader></GridLoader></div>}>
                {
                    data.map(singleApp => <SingleApp key={singleApp.id} singleApp={singleApp}></SingleApp>)
                }
            </Suspense>
        </div>
    );
};

export default Apps;