import React from "react";
import { Link } from "react-router-dom";

function CardModel(props) {
  return (
    <div className=" md:reveal  mobile:animate__animated mobile:animate__fadeInUp ">
      <div
        className={` w-[450px] rounded-[55px] h-[600px]  shadow-2xl shadow-black bg-zinc-800 
        ${props.disabled ? "" : "hover:scale-110"} duration-700 `}
      >
        <img className="rounded-t-[53px] h-[85%]" src={props.src}></img>
        <div className="flex flex-1  justify-center">
          <Link to={props.link}>
            {!props.disabled && (
              <button
                className=" -my-8 rounded-full w-72 h-16 bg-white  shadow-xl text-2xl 
            font-medium duration-700  hover:bg-[#669FD6] hover:text-white"
              >
                Utilizar Modelo
              </button>
            )}
          </Link>
        </div>
        {props.disabled && (
          <div className="text-3xl flex  h-[85px] items-center justify-center  text-white font-black ">
            Em desenvolvimento
          </div>
        )}
      </div>
    </div>
  );
}

export default CardModel;
