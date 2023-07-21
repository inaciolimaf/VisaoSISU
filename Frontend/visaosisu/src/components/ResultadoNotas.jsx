import styles from "./ResultadoNotas.module.css"
import ResultadoCota from "./ResultadoCota"

export default function ResultadoNotas(props){
    let resultado = props.resultados
    return(
        <div className={styles.resultado}>
            <h2>RESULTADO - {resultado[0]["AnoSISU"].toUpperCase()}: </h2>
            <p><strong>{resultado[0]["Universidade"].toUpperCase()}</strong></p>
            <p>{resultado[0]["Campus"].toUpperCase()}</p>
            <p>{resultado[0]["Nome_Municipio_Campus"].toUpperCase()}</p>
            <p><strong>{resultado[0]["Nome_Curso"].toUpperCase()}</strong></p>
            <p>{resultado[0]["Grau"].toUpperCase()} - {resultado[0]["Turno"].toUpperCase()}</p>
            <ResultadoCota resultados={resultado}/>
            <div>
                <h3>Mais informações:</h3>
                <p>Nota mínima Matemática: {resultado[0]["Minimo_Nota_MT"]}</p>
                <p>Peso da nota de Matemática: {resultado[0]["Peso_Nota_MT"]}</p>
                <p>Nota mínima Ciências da Natureza: {resultado[0]["Minimo_Nota_CN"]}</p>
                <p>Peso da nota de Ciências da Natureza: {resultado[0]["Peso_Nota_CN"]}</p>
                <p>Nota mínima Ciências Humanas: {resultado[0]["Minimo_Nota_CH"]}</p>
                <p>Peso da nota de Ciências Humanas: {resultado[0]["Peso_Nota_CH"]}</p>
                <p>Nota mínima Linguagens: {resultado[0]["Minimo_Nota_L"]}</p>
                <p>Peso da nota de Linguagens: {resultado[0]["Peso_Nota_L"]}</p>
                <p>Nota mínima Redação: {resultado[0]["Minimo_Nota_REDACAO"]}</p>
                <p>Peso da nota de Redação: {resultado[0]["Peso_Nota_REDACAO"]}</p>
                <p>Media mínima: {resultado[0]["Media_Minima"]}</p>
            </div>
        </div>
        
    )
}   