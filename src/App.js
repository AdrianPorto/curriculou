import logo from './logo.svg';
import './App.css';
import CardModel from './components/card-model/index.js';
import CurriculoOne from './img/curriculo1.jpg'
import CurriculoTwo from './img/curriculo2.jpg'
import CurriculoThree from './img/curriculo3.jpg'
import CurriculoFour from './img/curriculo4.jpg'
import Instagram from './img/instagram.png'

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function App() 
{
  return (
    
    <div className="w-screen h-screen ">
        <div className=' text-6xl mt-10 w-screen text-center animate__fadeInDown animate__animated' id="logo">
  Curriculou
      </div>
      <div className='flex flex-row justify-center items-center '>
        <div className='flex flex-col w-[500px] justify-center animate__animated  animate__fadeInDown '>
          <div className='text-4xl flex  pt-20 justify-center '>Crie agora o seu <br></br>
            Curriculo de maneira <br></br>simples e rápida!</div>
          <a href='#modelos' className='text-center flex flex-1 justify-center '>
          <div className='w-[350px] h-14 rounded-full text-xl    mt-6 text-white font-bold  hover:bg-orange-600
           hover:scale-110 duration-700 bg-[#669FD6] pt-3' >
            Selecionar o Modelo
          </div>
            </a>
        </div>
       

          <img src="./vetor.jpg" className='w-[600px] mt-2 animate__animated animate__fadeIn'></img>
  
      </div>

      <div className='mt-20' id='modelos'>
        <div className='text-center text-4xl' >Modelos</div>
        <div className='flex  flex-row justify-center mt-20'>
          <div className='mr-32'>
           <CardModel src={CurriculoOne} />
          </div>
             <CardModel src={CurriculoTwo}  />
        </div>
       <div className='flex flex-row justify-center mt-20'>
          <div className='mr-32'>
            <CardModel src={CurriculoThree} />
          </div>
            <CardModel src={CurriculoFour} />
        </div>
      
      </div>

      <div className='flex flex-1 flex-col justify-center mt-32 text-center items-center'>
        <div className='text-4xl'>Diga-nos sobre o Curriculou</div>
        <textarea className='w-[1030px] border-[2px] shadow-2xl  h-28  rounded-2xl text-xl mt-10 p-3'
          placeholder='Digite aqui...'></textarea>
        <button className='w-[1030px] h-20 mt-10 rounded-full bg-[#669FD6] hover:bg-orange-600
           duration-700 text-3xl text-white font-bold'>Enviar avaliação</button>
      </div>
    
      <div className='mt-16 text-center '>
        <div className='text-3xl text-center'>Veja novidades sobre o <br></br>Curriculou no nosso Instagram</div>
        
        <a src="" className='flex flex-1 justify-center mt-10 '>
          <img className='w-32 hover:scale-125 duration-700 cursor-pointer ' src={Instagram}></img>
        </a>
      </div>
      <div className='text-center text-gray-500 mt-10 text-xl'>
        Curriculou @ 2023 - Todos os direitos reservados.
        </div>
    </div>
    
  );
}

export default App;
