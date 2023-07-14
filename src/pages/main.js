import { useEffect } from "react";
import "../App.css";
import CardModel from "../components/card-model/index.js";
import CurriculoOne from "../img/curriculo1.jpg";
import CurriculoTwo from "../img/curriculo2.jpg";
import CurriculoThree from "../img/curriculo3.jpg";
import CurriculoFour from "../img/curriculo4.jpg";
import Instagram from "../img/instagram.png";
import { useState } from "react";

function Main() {
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  window.addEventListener("scroll", reveal);
  return (
    <div className="w-screen h-screen mobile:w-[100vw] mobile:w-max-[768px] ">
      <div
        className=" text-6xl mt-10 w-screen text-center  animate__fadeInDown animate__animated mobile:text-[13vw]"
        id="logo"
      >
        Curriculou
      </div>
      <div className="flex flex-row justify-center items-center mobile:flex-col-reverse ">
        <div className="flex flex-col w-[500px] justify-center animate__animated  animate__fadeInDown ">
          <div className="text-4xl flex  mobile:text-[8vw] mobile:text-left pt-20 mobile:pt-5 mobile:pb-10 justify-center  mobile:leading-[9vw] ">
            Crie agora o seu <br></br>
            Curriculo de maneira <br></br>simples e rápida!
          </div>
          <a
            href="#modelos"
            className="text-center flex flex-1 justify-center  "
          >
            <div
              className="w-[350px] h-14 rounded-full text-xl   mobile:w-[75vw] mobile:text-[5vw] flex justify-center 
              items-center mobile:h-[10vw] mt-6 text-white font-bold  hover:bg-orange-600
                hover:scale-110 duration-700 bg-[#669FD6] "
            >
              Selecionar o Modelo
            </div>
          </a>
        </div>

        <img
          src="./vetor.jpg"
          className="w-[600px] mt-2 animate__animated animate__fadeIn mobile:mt-10"
        ></img>
      </div>

      <div className="mt-40  " id="modelos">
        <div className="text-center text-5xl " id="title">
          Modelos
        </div>
        <div className="flex  flex-row justify-center mt-20 mobile:flex-col mobile:space-y-20 mobile:items-center mobile:reveal ">
          <div className="mr-32 mobile:mr-0">
            <CardModel src={CurriculoOne} link={"/minimalista"} />
          </div>
          <CardModel src={CurriculoTwo} disabled={true}   />
        </div>
        <div className="flex flex-row justify-center mt-20  mobile:flex-col mobile:space-y-20 mobile:items-center ">
          <div className="mr-32 mobile:mr-0">
            <CardModel src={CurriculoThree} link={""}  disabled={true}    />
          </div>
          <CardModel src={CurriculoFour} link={""}  disabled={true}   />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center mt-32 text-center items-center ">
        <div className="text-4xl">Diga-nos sobre o Curriculou</div>
        <textarea
          className="w-[1030px] border-[2px] shadow-2xl  h-44  rounded-2xl text-xl mt-10 p-3"
          placeholder="Digite aqui..."
        ></textarea>
        <button
          className="w-[700px] h-20 mt-10 rounded-full shadow-xl shadow-gray-300  bg-[#669FD6] hover:bg-orange-600
           duration-700 text-3xl text-white font-bold"
        >
          Enviar avaliação
        </button>
      </div>

      <div className="mt-16 text-center ">
        <div className="text-3xl text-center">
          Veja novidades sobre o <br></br>Curriculou no nosso Instagram
        </div>

        <a src="https://www.instagram.com/curriculou.ofc/" className="flex flex-1 justify-center mt-10 ">
          <img
            className="w-32 hover:scale-125 duration-700 cursor-pointer "
            src={Instagram}
          ></img>
        </a>
      </div>
      <div className="text-center text-gray-500 mt-10 text-xl">
        Curriculou @ 2023 - Todos os direitos reservados.
      </div>
    </div>
  );
}

export default Main;
