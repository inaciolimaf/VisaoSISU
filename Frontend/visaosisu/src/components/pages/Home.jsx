import styles from "./Home.module.css"
import { useState, useEffect } from "react"
import Input from "../Input"
import axios from "axios"
import * as ReactDOM from 'react-dom/client';
function Home(){
  const [instituicoes, setInstituicoes] = useState([]);
  const [Instituicao, setInstituicao] = useState([])
  const [anos, setAnos] = useState([]);
  const [ano, setAno] = useState([]);

  useEffect(() => {
    createPost(setAnos, {});
  }, []);


  async function createPost(setFunction, content) {
    const response = await axios.post("http://54.89.40.174/api/v1/sisu/", content, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response.data);
    setFunction(response.data);
  }
  return (
    <div className={styles.home}>
      <h1>VISUALIZE AS <strong>NOTAS</strong> DE CORTE ANTERIORES DE UMA MANEIRA <strong>FÁCIL</strong></h1>
      <p>E COM OS DETALHES PARA CADA PRÉVIA</p>
        <Input Titulo="Edição" options={anos.map((ano) => ano.AnoSISU)} onChange={(e)=>{
            setAno(e.target.innerText)
            createPost(setInstituicoes, {"AnoSISU": e.target.innerText});
        }} />
        <Input id="Instituicao" Titulo="Instituição" options={instituicoes.map((inst) => inst.Universidade)} onChange={console.log(ano)} />
        <Input Titulo="Local de oferta"/>
        <Input Titulo="Curso"/>
        <Input Titulo="Grau"/>
        <Input Titulo="Turno"/>
        <div className={styles.buttonContainer}>
            <button id={styles.button}>PESQUISAR</button>
        </div>
    </div>
    )
}
export default Home