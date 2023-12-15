import styles from "./ResultadoCota.module.css"
export default function ResultadoCota(props){
    let notas
    return(
        <div>
            {props.resultados.map((resultado, index)=>{
                notas = []
                for (let index = 0; index < 9; index++) {
                    if (resultado["Nota_Corte_"+(index+1)+"_Dia"]!=-1) {
                        notas.push(resultado["Nota_Corte_"+(index+1)+"_Dia"])
                    }
                }
                return(
                        <div className={styles.resultado} key={index}>
                            <p className={styles.cota}>{resultado.Cota}</p>
                            <p className={styles.nota}>
                                <strong className={styles.tituloNota}>NOTAS DE CORTE:</strong>
                                {notas.map((nota, index)=>{
                                    return (
                                        <p><span className={styles.notaDia}>{index+1}° DIA: <strong>{nota}</strong></span></p>
                                    )
                                })}
                                <p className={styles.vagas}>QUANTIDADE DE VAGAS: <strong>{resultado.Quant_Vagas_Cota}</strong></p>
                                <p className={styles.bonus}>BÔNUS: * <strong>{resultado.Bonus_Percentual} %</strong></p>
                            </p>
                        </div>)
                    }
                )
            }
                <p>*: O bônus na nota do ENEM é uma política de cotas que consiste na bonificação adicional percentual de pontos extras à pontuação dos candidatos que se enquadram em critérios específicos.</p>
            </div>
    )
}