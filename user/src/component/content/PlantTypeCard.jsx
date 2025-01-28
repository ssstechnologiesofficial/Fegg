import React from 'react';


const PlantCard = ({ image, name }) => {
    return (
        <div className="w-1/2 text-center text-xs bg-slate-100 hover:bg-green-100 p-2 rounded-2xl mr-2">
            <div className="flex">
                <img src={image} alt={name} className='w-14 h-14 rounded-full' />
                <div className='ps-3'>
                    <div className="text-sm text-primary font-semibold">{name}</div>
                    <div className='text-xs'>Description</div>
                </div>
            </div>
        </div>
    );
};
export default PlantCard