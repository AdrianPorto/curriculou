import { PDFViewer } from '@react-pdf/renderer';
import React, { useEffect, useState } from 'react';
import MyDocument from '../../documentos/minimalista';
import send   from "../../../../src/img/aviao-de-papel.png"
import globo  from "../../../../src/img/globo.png"
import street from "../../../../src/img/alfinete.png"

const Pdf = () => {
  const [pdfData, setPdfData] = useState(null);

  useEffect(() => {
    const nome = localStorage.getItem("nome");
    const cargo = localStorage.getItem("cargo");
    const profissionalOne = localStorage.getItem("profissionalOne");
    const profissionalTwo = localStorage.getItem("profissionalTwo");
    const profissionalThree = localStorage.getItem("profissionalThree");
    const hobbiesOne = localStorage.getItem("hobbiesOne");
    const hobbiesTwo = localStorage.getItem("hobbiesTwo");
    const hobbiesThree = localStorage.getItem("hobbiesThree");
    const sobre = localStorage.getItem("sobre");
    const escolaridadeLocalOne = localStorage.getItem("escolaridadeLocalOne");
    const escolaridadeCursoOne = localStorage.getItem("escolaridadeCursoOne");
    const escolaridadeDescricaoOne = localStorage.getItem("escolaridadeDescricaoOne");
    const trabalho = localStorage.getItem("trabalho");
    const trabalhoEmpresa = localStorage.getItem("trabalhoEmpresa");
    const trabalhoDescricao = localStorage.getItem("trabalhoDescricao");
    const email = localStorage.getItem("email");
    const telefone = localStorage.getItem("telefone");
    const social = localStorage.getItem("social");
    const endereco = localStorage.getItem("endereco");
    const selectedImage = localStorage.getItem("selectedImage");

    setPdfData(
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
      />
    );
  }, []);

    return (
        
         <div className="flex justify-center  bg-black">
            <PDFViewer width={1000} height={820} children={pdfData} >
            
          </PDFViewer>
        </div>
    );
}

export default Pdf;
