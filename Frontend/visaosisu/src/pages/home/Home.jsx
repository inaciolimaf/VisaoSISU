import styles from "./Home.module.css"
import { useState, useEffect } from "react"
import Input from "../../components/input/Input"
import axios from "axios"
import ResultadoNotas from "../../components/ResultadoNota/ResultadoNotas"
import universidadeLogo from "../../../img/universidade.png"
import capelo from "../../../img/capelo.png"
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

    // Para poder resetar
    const [instituicaoInput, setInstituicaoInput] = useState("");
    const [localOfertaInput, setLocalOfertaInput] = useState("");
    const [cursoInput, setCursoInput] = useState("");
    const [grauInput, setGrauInput] = useState("");
    const [turnoInput, setTurnoInput] = useState("");

    function zerarInputAPartirDe(posicao){
        const funcoesSet = [setInstituicaoInput, setLocalOfertaInput, setCursoInput, setGrauInput, setTurnoInput]
        for (let i = posicao-1; i < funcoesSet.length; i++){
            funcoesSet[i]("")
        }
    }

    useEffect(() => {
        createPost(setAnos, {}, "anos/");
    }, []);


    async function createPost(setFunction, content, route) {
        const response = await axios.post("/notas/"+route, content,);
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
                zerarInputAPartirDe(1)
                createPost(setInstituicoes, { "anoSISU": value }, 'universidades/');
            }} />
            <div className={styles.logo}>
                <img src={universidadeLogo} alt="Visão SISU" className={styles.imgLogos}/>
            </div>
            <Input id="Instituicao" value={instituicaoInput} Titulo="Instituição" options={mapOptions(instituicoes, "Universidade")} onChange={(e, value) => {
                setInstituicao(value)
                setInstituicaoInput(value)
                zerarInputAPartirDe(2)
                createPost(setLocais, { "anoSISU": ano, "universidade": value }, "campus/")
            }} />
            <Input Titulo="Local de oferta" value={localOfertaInput} options={mapOptions(locais, "Campus")} onChange={(e, value) => {
                setLocal(value)
                setLocalOfertaInput(value)
                zerarInputAPartirDe(3)
                createPost(setCursos, { "anoSISU": ano, "universidade": Instituicao, "campus": value }, "cursos/")
            }} />
            <div className={styles.logo}>
                <img src={capelo} alt="Visão SISU" className={styles.imgLogos}/>
            </div>
            <Input Titulo="Curso" value={cursoInput} options={mapOptions(cursos, "Nome_Curso")} onChange={(e, value) => {
                setCurso(value)
                zerarInputAPartirDe(4)
                setCursoInput(value)
                createPost(setGraus, { "anoSISU": ano, "universidade": Instituicao, "campus": local, "nome_curso": value }, "graus/")
            }} />
            <Input Titulo="Grau" value={grauInput} options={mapOptions(graus, "Grau")} onChange={(e, value) => {
                setGrau(value)
                setGrauInput(value)
                zerarInputAPartirDe(5)
                createPost(setTurnos, { "anoSISU": ano, "universidade": Instituicao, "campus": local, "nome_curso": curso, "grau": value }, "turnos/")
            }} />
            <Input Titulo="Turno" value={turnoInput} options={mapOptions(turnos, "Turno")} onChange={(e, value) => {
                setTurno(value)
                setTurnoInput(value)
            }} />
            <div className={styles.buttonContainer}>
                <button id={styles.button} onClick={() => {
                    setVisibleRsl(true)
                    createPost(setResultado, { "anoSISU": ano, "universidade": Instituicao, "campus": local, "nome_curso": curso, "grau": grau, "turno": turno }, "completo/")
                    // Para fazer testes sem precisar preencher os dados
                    // createPost(setResultado, {"anoSISU": "2023.1", "campus": "CAMPUS SOBRAL", "grau": "Licenciatura", "nome_curso": "MATEMÁTICA", "turno": "Matutino", "universidade": "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO CEARÁ"})

                }}>PESQUISAR</button>
            </div>
            {(visibleResult && resultado) && <ResultadoNotas resultados={resultado} />}
        </div>
    )
}
export default Home