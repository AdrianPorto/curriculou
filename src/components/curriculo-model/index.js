import React from 'react';
import Curriculo from './curriculo';
import Navbar from './Navbar';

const CurriculoModel = () => {
    return (
        <div className='bg-[#656565] h-full'>
            <Navbar></Navbar>
            <div className='flex flex-1 justify-center'>

            <Curriculo></Curriculo>
            </div>
        </div>
    );
}

export default CurriculoModel;
