import React from 'react';
import downloadIcon from '../../assets/icon_downloads.png';
import ratingIcon from '../../assets/icon_ratings.png';

const InstalledApp = ({ singleApp }) => {
    return (
        <div className='bg-white p-4 rounded-xl shadow-lg mb-4'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img className='w-20 h-20 rounded-xl' src={singleApp.image} alt="" />
                    </div>
                    <div>
                        <div className='mb-4'>
                            <h3 className='font-semibold text-xl'>{singleApp.title}</h3>
                        </div>
                        <div className='flex gap-4'>
                            <div>
                                <p className='flex items-center gap-2 text-[#00D390]'><img className='h-4 w-4' src={downloadIcon} alt="" /> {singleApp.downloads} M</p>
                            </div>
                            <div>
                                <p className='flex items-center gap-2 text-[#FF8811]'><img className='h-4 w-4' src={ratingIcon} alt="" /> {singleApp.ratingAvg}</p>
                            </div>
                            <div>
                                <p className='text-[#627382]'>{singleApp.size} MB</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='btn bg-[#00D390] text-white'>Uninstall</button>
                </div>
            </div>
        </div>
    );
};

export default InstalledApp;