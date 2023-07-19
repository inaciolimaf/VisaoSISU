import styles from "./ResultadoNotas.module.css"
import ResultadoCota from "./ResultadoCota"

export default function ResultadoNotas(props){
    let resultado = props.resultados
    return(
        <div className={styles.resultado}>
            <h2>RESULTADO: </h2>
            <p><strong>{resultado[0]["Universidade"].toUpperCase()}</strong></p>
            <p>{resultado[0]["Campus"].toUpperCase()}</p>
            <p>{resultado[0]["Nome_Municipio_Campus"].toUpperCase()}</p>
            <p><strong>{resultado[0]["Nome_Curso"].toUpperCase()}</strong></p>
            <p>{resultado[0]["Grau"].toUpperCase()} - {resultado[0]["Turno"].toUpperCase()}</p>
            <ResultadoCota resultados={resultado}/>
        </div>
        
    )
}   