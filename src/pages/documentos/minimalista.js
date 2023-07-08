import React from 'react';

import { Document, Image, Page, Text, View } from '@react-pdf/renderer';
const MyDocument = ({
nome,
cargo,
profissionalOne,
profissionalTwo,
profissionalThree,
hobbiesOne,
hobbiesTwo,
hobbiesThree,
sobre,
escolaridadeLocalOne,
escolaridadeCursoOne,
escolaridadeDescricaoOne,
trabalho,
trabalhoEmpresa,
trabalhoDescricao,
email,
telefone,
social,
endereco,
selectedImage,
send,
globo,
street}) => ( 
      
    <Document style={{ 
    display: "flex",
    flexDirection: 'column',
    margin: 40,
    marginTop: 50,
    padding: 0,
    backgroundColor: '#fff',
    borderRadius: 20}}>
      <Page>
        <View style={{  width: "100%",
    height: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    textAlign: "center"}}>
 
          
          <View style={{ display: "flex", flexDirection: "column" }}>
            <View style={{alignItems:"center",justifyContent:"center",marginBottom:10,marginTop:20}}>
              {!selectedImage ?
                
                
          <View style={{ width:120,height:120,borderRadius:100,backgroundColor:"#000",marginBottom:10}}>

          </View>
                
                :
            <View style={{ width:120,height:120,borderRadius:100,marginBottom:10}}>

              <Image src={selectedImage}  style={{width:'100%',height: "100%",objectFit:"cover",objectPosition:"center",borderRadius:'100%  '}}>
          </Image> 
          </View>

          }
              
             <Text style={{ fontSize: 40,letterSpacing: 2}} >
              {nome}
            </Text>
            <Text style={{   fontSize: 20, letterSpacing: 2, color: "#666"}} >
              {cargo}
            </Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row", marginTop: 25 }}>
              <View style={{ display: "flex", flexDirection: "column", marginLeft: 30 }}>
                <Text style={{    fontSize: 18,    fontWeight: "bold",    letterSpacing: 2}}>
                  HABILIDADES
                </Text>
                <Text style={{ 
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign: "left",
    marginTop: 9}}>
                  PROFISSIONAL
                </Text>
                 <View style={{ textAlign: "left", marginTop: 10 }}>
                   
                    <Text style={{fontSize:13,marginBottom:12}} >•  <Text style={{textDecoration:"", color:"gray", fontSize: 15}}>{profissionalOne}</Text></Text>
                    <Text style={{fontSize:13,marginBottom:12}} >•  <Text style={{textDecoration:"", color:"gray", fontSize: 15}}>{profissionalTwo}</Text></Text>
                    <Text style={{fontSize:13,marginBottom:12}} >•  <Text style={{textDecoration:"", color:"gray", fontSize: 15}}>{profissionalThree}</Text></Text>
                   
                </View>
             
                <Text style={{
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign: "left",
    marginTop: 9}}>
                  HOBBIES
                </Text>
                 <View style={{ textAlign: "left", marginTop: 10 }}>
                   
                    <Text style={{fontSize:13,marginBottom:12}} >•  <Text style={{textDecoration:"", color:"gray", fontSize: 15}}>{hobbiesOne}</Text></Text>
                    <Text style={{fontSize:13,marginBottom:12}} >•  <Text style={{textDecoration:"", color:"gray", fontSize: 15}}>{hobbiesTwo}</Text></Text>
                    <Text style={{fontSize:13,marginBottom:12}} >•  <Text style={{textDecoration:"", color:"gray", fontSize: 15}}>{hobbiesThree}</Text></Text>
                   
                </View>
              </View>
              <View style={{ display: "flex", flexDirection: "column", marginLeft: 30 }}>
                 <View style={{marginBottom: 20 }}>
                   
                 <Text style={{ display: "flex", fontSize: 20, marginBottom:20}}>
                  Sobre
                 </Text>
                 <View style={{ width: 360, borderLeft: "2px solid gray ",paddingLeft:20}}>
                   <Text style={{ textAlign: "justify" }}>{sobre}</Text>
                 </View>
                  </View>
                   
                 <View>
                 <Text style={{ display: "flex", fontSize: 20, marginBottom:20}}>
                  Escolaridade
                 </Text>
                 <View style={{ width: 360, borderLeft: "2px solid gray ",paddingLeft:20}}>
                      <Text style={{marginBottom:2, textAlign: "justify" }}>{escolaridadeLocalOne}</Text>
                      <Text style={{marginBottom:5, textAlign: "justify",color:"gray" }}>{escolaridadeCursoOne}</Text>
                      <Text style={{marginBottom:2, textAlign: "justify" }}>{escolaridadeDescricaoOne}</Text>
                 </View>
                 
                 </View>
                 
              
                    <View>
                 <Text style={{ display: "flex", fontSize: 20, marginBottom:20,marginTop: 20}}>
                  Experiência de trabalho
                   </Text>
                 <View style={{ width: 360, borderLeft: "2px solid gray ",paddingLeft:20,marginBottom:30}}>
                   <View style={{left: -7, top: -9,
                     width: 12, height: 12, position: "absolute",
                     border: "2.5px solid black", borderRadius: 100
                   }}></View>
                      <Text style={{marginBottom:2, textAlign: "justify" }}>              {trabalho}</Text>
                      <Text style={{marginBottom:5, textAlign: "justify",color:"gray" }}> {trabalhoEmpresa}</Text>
                      <Text style={{marginBottom:2, textAlign: "justify" }}>              {trabalhoDescricao}</Text>
                 </View>
                   
             
                  <View style={{flexDirection:"row"}} >

                  <View style={{ flexDirection: "column", marginBottom: 20 }}>
                    
                  <View style={{flexDirection:"row",marginBottom:20}}>
                    <Image style={{ width: 20, height: 20,marginRight:20 }} source={send}></Image>
                 <Text  style={{minWidth:100,maxWidth:300,fontSize:12,textAlign:"left"}} >{email}</Text>
                  </View>
                    <View style={{flexDirection:"row"}}>
                     <Image style={{ width: 20, height: 20,marginRight:20 }} source={globo}></Image>
                 <Text  style={{minWidth:100,maxWidth:300,fontSize:12,textAlign:"left"}} >{social}</Text>
                  </View>
                  </View>
                   <View style={{ flexDirection: "column", marginBottom: 20 ,marginLeft:20}}>
                    
                  <View style={{flexDirection:"row",marginBottom:20}}>
                    <View style={{width:13 , height:20, border: "1.4px solid black",borderBottom:"2.5px",marginRight:20,marginLeft:2.5}}></View>
                     <Text  style={{minWidth:100,maxWidth:300,fontSize:12,textAlign:"left"}} >{telefone}</Text>
                  </View>
                    <View style={{flexDirection:"row"}}>
                    <Image style={{ width: 20, height: 20,marginRight:20,marginRight:20 }} source={street}></Image>
                  <Text  style={{minWidth:100,maxWidth:300,fontSize:12,textAlign:"left"}} >{telefone}</Text>
                  </View>
                       </View>
                     
                  </View>
                  



              
                 
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
   );

export default MyDocument;
