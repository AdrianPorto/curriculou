import logo from './logo.svg';
import './App.css';
import CardModel from './components/card-model/index.js';
import CurriculoOne from './img/curriculo1.jpg'
import CurriculoTwo from './img/curriculo2.jpg'
import CurriculoThree from './img/curriculo3.jpg'
import CurriculoFour from './img/curriculo4.jpg'
function App() 
{
  return (
    
    <div className="w-screen h-screen ">
        <div className=' text-6xl mt-10 w-screen text-center' id="logo">
  Curriculou
      </div>
      <div className='flex flex-row'>
        <div className='flex flex-col w-[50%]  '>
          <div className='text-4xl flex  pl-[15%] pt-[15%] '>Crie agora o seu <br></br> Curriculo de maneira <br></br>simples e rápida!</div>
          <a href='#modelos' className='text-center'>
          <div className='w-[350px] h-14 rounded-full text-xl ml-[15%] mt-6 text-white font-bold hover:bg-orange-600
           hover:scale-110 duration-700 bg-[#669FD6] pt-3' >
            Selecionar o Modelo
          </div>
            </a>
        </div>
        <img src="./vetor.jpg" className='w-[50%]'></img>
      </div>

      <div className='mt-20' id='modelos'>
        <div className='text-center text-4xl' >Modelos</div>
        <div className='flex  flex-row justify-center mt-20'>
          <div className='mr-32'>
           <CardModel src={CurriculoOne} />
          </div>
             <CardModel src={CurriculoTwo} />
        </div>
       <div className='flex flex-row justify-center mt-20'>
          <div className='mr-32'>
            <CardModel src={CurriculoThree} />
          </div>
            <CardModel src={CurriculoFour} />
        </div>
      </div>
    </div>
  );
}

export default App;
