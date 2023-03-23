import React from 'react';
import CurriculoModel from '../components/curriculo-model/index';
import "./css/minimalista.css"



const Minimalista = () => {
    return (
        <div className='bg-[#656565]    h-[70vw] w-screen absolute'>
            <CurriculoModel></CurriculoModel>
            <div className='flex flex-1 h-[100vh] w-screen    justify-center'>
                <div className='w-[550px] h-[770px] mt-12 mb-12 rounded-3xl
                    shadow-2xl bg-white animate__animated animate__fadeIn'> 
                    <div className='flex flex-1   justify-center'>
                     <div className='w-28 h-28 bg-black rounded-full mt-10'>
                        </div>
                    </div>
                    <div className='flex flex-1 flex-col justify-center'>
                        <input className='w-full h-14  text-center text-4xl ' placeholder='Seu Nome' id='name'></input>
                            <input className='w-full h-7  text-center text-2xl text-gray-600    ' placeholder='Cargo' id='name'></input>
                    </div>

                    <div className='flex flex-row'>
                    <div className=' w-52 mt-12 h-[486px]  ml-5 rounded-bl-xl'>
                        <div className='flex ml-5  font-bold text-lg  ' id='titulo'>HABILIDADES</div>
                        <div className='flex ml-5 mt-3 font-bold text-xs '  id='titulo'>PROFISSIONAL </div>
                        <div className='flex flex-1 flex-col'>
                            <li className='mt-2 ml-5'>
                                <input className='w-40 -mx-3 text-[14px] text-gray-500' placeholder='Digite aqui' ></input>
                            </li>
                              <li className='mt-1 ml-5'>
                                <input className='w-40 -mx-3 text-[14px] text-gray-500' placeholder='Digite aqui'></input>
                            </li>
                              <li className='mt-1 ml-5'>
                                <input className='w-40 -mx-3 text-[14px] text-gray-500' placeholder='Digite aqui' ></input>
                            </li>
                        </div>
                         <div className='flex ml-5 mt-3 font-bold text-xs' id='titulo'>TÉCNICO </div>
                        <div className='flex flex-1 flex-col'>
                            <li className='mt-1 ml-5'>
                                <input className='w-40 -mx-3 text-[14px] text-gray-500' placeholder='Digite aqui' ></input>
                            </li>
                              <li className='mt-1 ml-5'>
                                <input className='w-40 -mx-3 text-[14px] text-gray-500' placeholder='Digite aqui' ></input>
                            </li>
                              <li className='mt-1 ml-5'>
                                <input className='w-40 -mx-3 text-[14px] text-gray-500' placeholder='Digite aqui' ></input>
                            </li>
                        </div>
                         <div className='flex ml-5 mt-3 font-bold text-xs ' id='titulo'>PESSOAL </div>
                        <div className='flex flex-1 flex-col'>
                            <li className='mt-1 ml-5'>
                                <input className='w-40 -mx-3 text-[14px] text-gray-500' placeholder='Digite aqui' ></input>
                            </li>
                              <li className='mt-1 ml-5'>
                                <input className='w-40 -mx-3 text-[14px] text-gray-500' placeholder='Digite aqui' ></input>
                            </li>
                              <li className='mt-1 ml-5'>
                                <input className='w-40 -mx-3 text-[14px] text-gray-500' placeholder='Digite aqui' ></input>
                            </li>
                        </div>
                    </div>
                        <div className=' w-[323px] mt-12 h-[486px] '>
                            <div className='flex  font-bold text-sm ' id='titulo'>Sobre</div>
                            <textarea className='text-[12px] pl-8 w-[100%] h-32 overflow-y-hidden   border-l-2 border-gray-500'placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu efficitur risus, nec sagittis lacus.
                                In ut porta dolor. Morbi semper mauris non enim aliquet, in vestibulum lectus rutrum.
                                Vivamus porttitor ut eros at lobortis. Mauris nisi tellus, ' aria-disabled></textarea>
                    </div>
                      </div>
            </div>
            </div>
        </div>
    );
}

export default Minimalista;
