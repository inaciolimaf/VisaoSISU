import styles from "./ResultadoNotas.module.css"
import ResultadoCota from "./ResultadoCota"

export default function ResultadoNotas(props){
    let resultado = props.resultados
    if(resultado.length == 0){
        return (<div>Não foi encontrado nenhum resultado para os parâmetros escolhidos (tente atualizar a página)</div>)
    }
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
                <table>
                    <thead>
                        <th>ENEM</th>
                        <th>PESO</th>
                        <th>NOTA MÍNIMA</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Redação</td>
                            <td>{resultado[0]["Peso_Nota_REDACAO"]}</td>
                            <td>{resultado[0]["Minimo_Nota_REDACAO"]}</td>
                        </tr>
                        <tr>
                            <td>Ciências da Natureza e suas Tecnologias</td>
                            <td>{resultado[0]["Peso_Nota_CN"]}</td>
                            <td>{resultado[0]["Minimo_Nota_CN"]}</td>
                        </tr>
                        <tr>
                            <td>Ciências Humanas e suas Tecnologias</td>
                            <td>{resultado[0]["Peso_Nota_CH"]}</td>
                            <td>{resultado[0]["Minimo_Nota_CH"]}</td>
                        </tr>
                        <tr>
                            <td>Linguagens, Códigos e suas Tecnologias</td>
                            <td>{resultado[0]["Peso_Nota_L"]}</td>
                            <td>{resultado[0]["Minimo_Nota_L"]}</td>
                        </tr>
                        <tr>
                            <td>Matemática e suas Tecnologias</td>
                            <td>{resultado[0]["Peso_Nota_MT"]}</td>
                            <td>{resultado[0]["Minimo_Nota_MT"]}</td>
                        </tr>
                        <tr>
                            <td>Média mínima no Enem</td>
                            <td>-</td>
                            <td>{resultado[0]["Media_Minima"]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>     
    )
}   