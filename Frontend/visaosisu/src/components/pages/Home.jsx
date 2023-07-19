import styles from "./Home.module.css"
import { useState, useEffect } from "react"
import Input from "../Input"
import axios from "axios"
import * as ReactDOM from 'react-dom/client';
function Home(){
    const [turno, setTurno] = useState([])
    const [turnos, setTurnos] = useState([])
    const [graus, setGraus] = useState([])
    const [grau, setGrau] = useState([])
    const [cursos, setCursos] = useState([])
    const [curso, setCurso] = useState([])
    const [locais, setLocais] = useState([])
    const [local, setLocal] = useState([])
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
        setFunction(response.data);
    }
    function mapOptions(value, key){
        let maps
        if (value.length>0){
            if (typeof value[0][key] == "string") {
                // Se realmente a requisição da api está válida
                maps = value.map((inst) => inst[key])
            }
            else
                maps = []
        }
        else
            maps = []
        return maps
    }
    return (
        <div className={styles.home}>
        <h1>VISUALIZE AS <strong>NOTAS</strong> DE CORTE ANTERIORES DE UMA MANEIRA <strong>FÁCIL</strong></h1>
        <p>E COM OS DETALHES PARA CADA PRÉVIA</p>
            <Input Titulo="Edição" options={anos.map((ano) => ano.AnoSISU)} onChange={(e)=>{
                setAno(e.target.innerText)
                createPost(setInstituicoes, {"AnoSISU": e.target.innerText});
            }} />
            <Input id="Instituicao" Titulo="Instituição" options={mapOptions(instituicoes, "Universidade")} onChange={(e)=>{
                setInstituicao(e.target.innerText)
                createPost(setLocais, {"AnoSISU": ano, "Universidade": e.target.innerText})
            }} />
            <Input Titulo="Local de oferta" options={mapOptions(locais, "Campus")} onChange={(e)=>{
                setLocal(e.target.innerText)
                createPost(setCursos, {"AnoSISU": ano, "Universidade": Instituicao, "Campus": e.target.innerText})
            }}/>
            <Input Titulo="Curso" options={mapOptions(cursos, "Nome_Curso")} onChange={(e)=>{
                setCurso(e.target.innerText)
                createPost(setGraus, {"AnoSISU": ano, "Universidade": Instituicao, "Campus": local, "Nome_Curso": e.target.innerText})
            }}/>
            <Input Titulo="Grau" options={mapOptions(graus, "Grau")} onChange={(e)=>{
                setGrau(e.target.innerText)
                createPost(setTurnos, {"AnoSISU": ano, "Universidade": Instituicao, "Campus": local, "Nome_Curso": curso, "Grau": e.target.innerText})
            }}/>
            <Input Titulo="Turno" options={mapOptions(turnos, "Turno")} onChange={(e)=>{
                setTurno(e.target.innerText)
            }}/>
            <div className={styles.buttonContainer}>
                <button id={styles.button}>PESQUISAR</button>
            </div>
        </div>
    )
}
export default Home