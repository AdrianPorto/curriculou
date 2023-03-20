import React from 'react';


function CardModel(props) {
    return (
        <div className='w-[450px] rounded-[55px] h-[500px] border-2 border-black shadow-2xl shadow-black '>
            <img src={props.src}></img>
        </div>
    );
}

export default CardModel;
