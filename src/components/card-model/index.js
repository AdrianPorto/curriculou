import React from 'react';


function CardModel(props) {
    return ( 

        <div className='w-[450px] rounded-[55px] h-[600px]  shadow-2xl shadow-black bg-zinc-800 hover:scale-110 duration-700'>
            <img className='rounded-t-[53px] h-[85%]' src={props.src}></img>
            <div className='flex flex-1  justify-center'>
                
                <button  className='-my-8 rounded-full w-72 h-16 bg-white  shadow-xl text-2xl 
            font-medium duration-700  hover:bg-[#669FD6] hover:text-white' >Utilizar Modelo</button>
        </div>
        </div>
    
    );
}

export default CardModel;
