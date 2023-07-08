import React, { useState ,useRef} from "react";
import CurriculoModel from "../../components/curriculo-model/index";
import "../css/minimalista.css";

import send   from "../../../src/img/aviao-de-papel.png"
import globo  from "../../../src/img/globo.png"
import street from "../../../src/img/alfinete.png"


import {BiSolidDownload } from "react-icons/bi"
import ImageUploader from "../components/ImageUploader";

import MyDocument from "../documentos/minimalista";
 
  
const Minimalista = () => {
 
  const [nome, setNome] = useState("")
  const [cargo,setCargo] = useState("")
  const [profissionalOne,setProfissionalOne] = useState("")
  const [profissionalTwo,setProfissionalTwo] = useState("")
  const [profissionalThree,setProfissionalThree] = useState("")
  const [hobbiesOne, setHobbiesOne] = useState("")
  const [hobbiesTwo, setHobbiesTwo] = useState("")
  const [hobbiesThree, setHobbiesThree] = useState("")
  const [sobre, setSobre] = useState("")
  const [escolaridadeLocalOne, setEscolaridadeLocalOne] = useState("")
  const [escolaridadeCursoOne, setEscolaridadeCursoOne] = useState("")
  const [escolaridadeDescricaoOne, setEscolaridadeDescricaoOne] = useState("")
  const [trabalho, setTrabalho] = useState("")
  const [trabalhoEmpresa, setTrabalhoEmpresa] = useState("")
  const [trabalhoDescricao, setTrabalhoDescricao] = useState("")
  const [email,setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [social, setSocial] = useState("")
  const [endereco, setEndereco] = useState("")
  const [selectedImage, setSelectedImage] = useState("");

 
  
localStorage.setItem("nome", nome);
localStorage.setItem("cargo", cargo);
localStorage.setItem("profissionalOne", profissionalOne);
localStorage.setItem("profissionalTwo", profissionalTwo);
localStorage.setItem("profissionalThree", profissionalThree);
localStorage.setItem("hobbiesOne", hobbiesOne);
localStorage.setItem("hobbiesTwo", hobbiesTwo);
localStorage.setItem("hobbiesThree", hobbiesThree);
localStorage.setItem("sobre", sobre);
localStorage.setItem("escolaridadeLocalOne", escolaridadeLocalOne);
localStorage.setItem("escolaridadeCursoOne", escolaridadeCursoOne);
localStorage.setItem("escolaridadeDescricaoOne", escolaridadeDescricaoOne);
localStorage.setItem("trabalho", trabalho);
localStorage.setItem("trabalhoEmpresa", trabalhoEmpresa);
localStorage.setItem("trabalhoDescricao", trabalhoDescricao);
localStorage.setItem("email", email);
localStorage.setItem("telefone", telefone);
localStorage.setItem("social", social);
localStorage.setItem("endereco", endereco);
localStorage.setItem("selectedImage", selectedImage);

 
  
  return (
    <div className="bg-[#656565]    h-[70vw] w-screen absolute">
      
            {/* <PDFDownloadLink document={<MyDocument />} fileName="curriculo" >{({ loading   }) => (loading ? "Loading document..." : <button>Download</button>)}</PDFDownloadLink>
             */}
      <div className="absolute right-[3vw] top-[0.5vw]" onClick={() => {
        window.open("./minimalista/pdf", "_blank")
           }}>
        <BiSolidDownload className='w-[60px] h-[60px] fill-white' />
      </div>
      <CurriculoModel></CurriculoModel>
          <div className="flex flex-1 h-[100vh] w-screen    justify-center ">
      
        <div
          className="w-[550px] h-[820px] mt-12 mb-12 rounded-3xl
          shadow-2xl bg-white animate__animated animate__fadeIn"
        >
          <div className="flex flex-1   justify-center ">
           <div>
          
      
          
      {/* <div id="customDiv" className="w-28 h-28 bg-black rounded-full mt-10"
              >
          <input  type="file" className="bg-slate-500 w-full h-full rounded-full opacity-0" ></input>
              
                   
      </div> */}
              <ImageUploader selectedImage={selectedImage} setSelectedImage={setSelectedImage}></ImageUploader>
    </div>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <input
              className="w-full h-14  text-center text-4xl "
              placeholder="Seu Nome"
              id="name"
              onChange={(e) => {
                      setNome(e.target.value)
                    }}
            ></input>
            <input
              className="w-full h-7  text-center text-2xl text-gray-600     "
              placeholder="Cargo"
              id="name"
                 onChange={(e) => {
                      setCargo(e.target.value)
                    }}
            ></input>
          </div>

          <div className="flex flex-row">
            <div className=" w-52 mt-12 h-[486px]  ml-5 rounded-bl-xl">
              <div className="flex ml-5  font-bold text-lg  " id="titulo">
                HABILIDADES
              </div>
              <div className="flex ml-5 mt-3 font-bold text-xs " id="titulo">
            
              </div>
             
              
              <div className="flex flex-1 flex-col">
                <li className="mt-1 ml-5">
                  <input
                    className="w-40 -mx-3 text-[14px] text-gray-500"
                    placeholder="Digite aqui"
                       onChange={(e) => {
                        setProfissionalOne(e.target.value)
                    }}
                  ></input>
                </li>
                <li className="mt-1 ml-5">
                  <input
                    className="w-40 -mx-3 text-[14px] text-gray-500"
                    placeholder="Digite aqui"
                    onChange={(e) => {
                      setProfissionalTwo(e.target.value)
                    }}
                  ></input>
                </li>
                <li className="mt-1 ml-5">
                  <input
                    className="w-40 -mx-3 text-[14px] text-gray-500"
                    placeholder="Digite aqui"
                     onChange={(e) => {
                      setProfissionalThree(e.target.value)
                    }}
                  ></input>
                </li>
              </div>
              <div className="flex ml-5 mt-4 mb-3 font-bold text-xs " id="titulo">
                HOBBIES
              </div>
              <div className="flex flex-1 flex-col">
                <li className="mt-1 ml-5">
                  <input
                    className="w-40 -mx-3 text-[14px] text-gray-500"
                    placeholder="Digite aqui"
                     onChange={(e) => {
                      setHobbiesOne(e.target.value)
                    }}
                  ></input>
                </li>
                <li className="mt-1 ml-5">
                  <input
                    className="w-40 -mx-3 text-[14px] text-gray-500"
                    placeholder="Digite aqui"
                       onChange={(e) => {
                      setHobbiesTwo(e.target.value)
                    }}
                  ></input>
                </li>
                <li className="mt-1 ml-5">
                  <input
                    className="w-40 -mx-3 text-[14px] text-gray-500"
                    placeholder="Digite aqui"
                       onChange={(e) => {
                      setHobbiesThree(e.target.value)
                    }}
                  ></input>
                </li>
              </div>
            </div>
            <div className="flex flex-col">
              <div className=" w-[323px] mt-12 h-[486px] ">
                <div className="flex  font-bold text-sm mb-2" id="titulo">
                  Sobre
                </div>
                <div className="flex flex-row mb-2">
                  <div className="h-[100px] w-[2px] bg-gray-500"></div>
                  <textarea
                    className="text-[12px] pl-4 w-[90%] h-[100px] overflow-y-hidden    border-gray-500"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu efficitur risus, nec sagittis lacus.
                  In ut porta dolor. Morbi semper mauris non enim aliquet,  "
                    aria-disabled
                    maxLength={195}
                    onChange={(e) => {
                      setSobre(e.target.value)
                    }}
                  ></textarea>
                </div>
                <div className="flex  font-bold text-sm  mb-2" id="titulo">
                  Escolaridade
                </div>
                <div className="border-gray-500 border-l-2 flex flex-col mb-2">

                 <input
                    className="w-40  text-[14px] pl-4 pb-[0.2vw] text-black "
                    placeholder="Onde estudou"
                    onChange={(e) => {
                      setEscolaridadeLocalOne(e.target.value)
                    }}
                    ></input>
                     <input
                    className="w-40  text-[12px] pl-4  text-gray-500"
                    placeholder="Curso (2022-2023)"
                    onChange={(e) => {
                      setEscolaridadeCursoOne(e.target.value)
                    }}
                    ></input>
                <textarea
                  className="text-[12px] pl-4 w-[90%] h-12 overflow-y-hidden    border-gray-500  "
                    placeholder="Descreva mais sobre a sua formação..."
                    maxLength={100}
                      onChange={(e) => {
                      setEscolaridadeDescricaoOne(e.target.value)
                    }}
                  aria-disabled
                  ></textarea>
                  </div>
               <div className="flex  font-bold text-sm  mb-2" id="titulo">
                  Experiência de trabalho
                </div>
                <div className="border-gray-500 border-l-2 flex flex-col mt-4 relative mb-6">
<span className="absolute -top-2 -left-[5.9px]  border-2 border-black w-[10px] h-[10px] rounded-full"></span>
                   <input
                    className="w-40  text-[14px] pl-4 pb-[10px]  text-black -my-2"
                    placeholder="Cargo"
                    onChange={(e) => {
                      setTrabalho(e.target.value)
                    }}
                    ></input>
                     <input
                    className="w-40  text-[12px] pl-4  text-gray-500"
                    placeholder="Empresa (2022-2023)"
                    onChange={(e) => {
                      setTrabalhoEmpresa(e.target.value)
                    }}
                    ></input>
                <textarea
                  className="text-[12px] pl-4 w-[90%] h-10 overflow-y-hidden    border-gray-500  "
                    placeholder="Descreva mais sobre o trabalho ..."
                    maxLength={100}
                      onChange={(e) => {
                      setTrabalhoDescricao(e.target.value)
                    }}
                  aria-disabled
                  ></textarea>
                </div>
                <div>

                  <div className="flex flex-row">
                    
                <div className="flex flex-col space-y-3">
                  <div className="flex flex-row">
                    <img className="w-4 h-4" alt="" src={send}></img>
                 <input
                    className="w-36  text-[10px] pl-4  text-gray-500"
                    placeholder="exemple@exemple.com"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    ></input>
                  </div>
                  <div className="flex flex-row">
                    <img className="w-4 h-4" alt="" src={globo}></img>
                 <input
                    className="w-36  text-[10px] pl-4  text-gray-500"
                    placeholder="www.exemple.com.br"
                    onChange={(e) => {
                      setSocial(e.target.value)
                    }}
                    ></input>
                  </div>
                    </div>
                      <div className="flex flex-col space-y-3">
                  <div className="flex flex-row">
                    <div className="w-[10px] h-4 border-[1px] border-b-[2px] border-black"></div>
                 <input
                    className="w-32  text-[10px] pl-4  text-gray-500"
                    placeholder="+55 (44) 9.9999-9999"
                    onChange={(e) => {
                      setTelefone(e.target.value)
                    }}
                    ></input>
                  </div>
                  <div className="flex flex-row">
                    <img className="w-4 h-4" alt="" src={street}></img>
                 <textarea
                    className="w-32 h-8  text-[10px] pl-4  text-gray-500 overflow-y-hidden"
                          placeholder="Endereço"
                          maxLength={47}
                    onChange={(e) => {
                      setEndereco(e.target.value)
                    }}
                          aria-disabled
                    ></textarea>
                  </div>
                </div>
                </div>
                    </div>
              </div>
                      </div>
          </div> 
          <div style={{display:"none"}}>
            
         
        
          <MyDocument
          nome={nome}
cargo={cargo}
profissionalOne={profissionalOne}
profissionalTwo={profissionalTwo}
profissionalThree={profissionalThree}
hobbiesOne={hobbiesOne}
hobbiesTwo={hobbiesTwo}
hobbiesThree={hobbiesThree}
sobre={sobre}
escolaridadeLocalOne={escolaridadeLocalOne}
escolaridadeCursoOne={escolaridadeCursoOne}
escolaridadeDescricaoOne={escolaridadeDescricaoOne}
trabalho={trabalho}
trabalhoEmpresa={trabalhoEmpresa}
trabalhoDescricao={trabalhoDescricao}
email={email}
telefone={telefone}
social={social}
endereco={endereco}
selectedImage={selectedImage}
send={send}
globo={globo}
street={street}
            
></MyDocument>
</div>
        </div>
      </div>
    </div>
  );
};

export default Minimalista;
