import React, { useEffect, useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../Utilities/addToLocalStorage';
import InstalledApp from '../InstalledApp/InstalledApp';

const InstalledApps = () => {

    const [installed, setInstalled] = useState([]);
    const [sort, setSort] = useState([]);

    const data = useLoaderData();

    const handleSort = (type) =>{
        setSort(type);
        if (type === "lowToHigh"){
            const sortedLowToHigh = [...installed].sort((a, b) => a.size - b.size);
            setInstalled(sortedLowToHigh);
        }
        if (type === "highToLow"){
            const sortedHighToLow = [...installed].sort((a, b) => b.size - a.size);
            setInstalled(sortedHighToLow);
        }
    }

    useEffect(()=>{
        const storedAppData = getStoredApp();
        const convertedStoredApps = storedAppData.map(id => parseInt(id));
        const installedList = data.filter(app => convertedStoredApps.includes(app.id));
        setInstalled(installedList);
    }, [])

    return (
        <div className='bg-base-200'>
            <div className='p-5 md:p-20'>
                <div className='mb-10 text-center'>
                    <h2 className='text-2xl md:text-5xl font-semibold'>Your Installed Apps</h2>
                    <p className='mt-4 md:text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex justify-between items-center mb-4'>
                    <p className='font-bold'>{installed.length} Apps Found</p>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1 bg-transparent text-[#627382] border-2 border-gray-200">Sort By Downloads <IoMdArrowDropdown /></div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={()=>handleSort("lowToHigh")}>Low to High</a></li>
                            <li><a onClick={()=>handleSort("highToLow")}>High to Low</a></li>
                        </ul>
                    </div>
                </div>
                <div className='mb-4'>
                    {
                        installed.map(a => <InstalledApp key={a.id} singleApp={a}></InstalledApp>)
                    }
                </div>
            </div>
        </div>
    );
};

export default InstalledApps;