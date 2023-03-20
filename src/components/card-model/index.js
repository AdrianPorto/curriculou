import React from 'react';


function CardModel(props) {
    return (
        <div className='w-[450px] rounded-[55px] h-[600px] border-2 border-black shadow-2xl shadow-black '>
            <img className='rounded-t-[53px] h-[85%]' src={props.src}></img>
        </div>
    );
}

export default CardModel;
