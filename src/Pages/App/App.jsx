import React from 'react';
import downloadImg from '../../assets/icon_downloads.png';
import ratingImg from '../../assets/icon_ratings.png';

const App = ({ singleApp }) => {

    const { image, title, ratingAvg, downloads } = singleApp;

    return (
        <div className="card bg-white shadow-md p-2 md:p-4">
            <figure>
                <img className='w-80 h-80 rounded-xl'
                    src={image}
                    alt="" />
            </figure>
            <div className="card-body p-2">
                <h2 className="card-title">
                    {title}
                </h2>
                <div className="card-actions justify-between">
                    <div className="badge bg-[#F1F5E8] text-[#00D390] font-semibold"><img className='w-3 h-3' src={downloadImg} alt="" /> {downloads}</div>
                    <div className="badge bg-[#FFF0E1] text-[#FF8811] font-semibold"><img className='w-3 h-3' src={ratingImg} alt="" /> {ratingAvg}</div>
                </div>
            </div>
        </div>
    );
};

export default App;