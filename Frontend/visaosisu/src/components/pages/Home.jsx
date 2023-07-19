import styles from "./Home.module.css"
import { useState, useEffect } from "react"
import Input from "../Input"
import axios from "axios"
import ResultadoNotas from "../ResultadoNotas"
import universidadeLogo from "../../../img/universidade.png"
function Home() {
    const [visibleResult, setVisibleRsl] = useState(false)
    const [resultado, setResultado] = useState(false)
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
    function mapOptions(value, key) {
        let maps
        if (value.length > 0) {
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
            <Input Titulo="Edição" options={anos.map((ano) => ano.AnoSISU)} onChange={(e, value) => {
                setAno(value)
                createPost(setInstituicoes, { "AnoSISU": value });
            }} />
            <div className={styles.logo}>
                <img src={universidadeLogo} alt="Visão SISU" className={styles.imgLogos}/>
            </div>
            <Input id="Instituicao" Titulo="Instituição" options={mapOptions(instituicoes, "Universidade")} onChange={(e, value) => {
                setInstituicao(value)
                createPost(setLocais, { "AnoSISU": ano, "Universidade": value })
            }} />
            <Input Titulo="Local de oferta" options={mapOptions(locais, "Campus")} onChange={(e, value) => {
                setLocal(value)
                createPost(setCursos, { "AnoSISU": ano, "Universidade": Instituicao, "Campus": value })
            }} />
            <Input Titulo="Curso" options={mapOptions(cursos, "Nome_Curso")} onChange={(e, value) => {
                setCurso(value)
                createPost(setGraus, { "AnoSISU": ano, "Universidade": Instituicao, "Campus": local, "Nome_Curso": value })
            }} />
            <Input Titulo="Grau" options={mapOptions(graus, "Grau")} onChange={(e, value) => {
                setGrau(value)
                createPost(setTurnos, { "AnoSISU": ano, "Universidade": Instituicao, "Campus": local, "Nome_Curso": curso, "Grau": value })
            }} />
            <Input Titulo="Turno" options={mapOptions(turnos, "Turno")} onChange={(e, value) => {
                setTurno(value)
            }} />
            <div className={styles.buttonContainer}>
                <button id={styles.button} onClick={() => {
                    setVisibleRsl(true)
                    createPost(setResultado, { "AnoSISU": ano, "Universidade": Instituicao, "Campus": local, "Nome_Curso": curso, "Grau": grau, "Turno": turno })
                    // createPost(setResultado, {"AnoSISU": "2023.1", Campus: "UNIDADE SEDE", "Grau": "Bacharelado", "Nome_Curso": "ESTATÍSTICA", "Turno": "Matutino", "Universidade": "ESCOLA NACIONAL DE CIÊNCIAS ESTATÍSTICAS"})

                }}>PESQUISAR</button>
            </div>
            {(visibleResult && resultado) && <ResultadoNotas resultados={resultado} />}
        </div>
    )
}
export default Home