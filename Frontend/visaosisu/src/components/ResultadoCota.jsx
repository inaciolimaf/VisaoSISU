import styles from "./ResultadoCota.module.css"
export default function ResultadoCota(props){
    console.log(props.resultados)
    return(
        <div>
            {props.resultados.map((resultado, index)=>{return(
                <div className={styles.resultado}>
                    <p className={styles.cota}>{resultado.Cota}</p>
                    <p className={styles.nota}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, vitae? Quam aperiam fuga qui blanditiis saepe dolorem, dolores earum doloremque odio, porro vel nesciunt accusamus eveniet? Vitae accusantium obcaecati molestias! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod id natus qui! Architecto, voluptas eligendi. Officiis assumenda aliquid, delectus earum, vitae eveniet minima fugiat repudiandae laborum necessitatibus libero nemo expedita!</p>
                </div>
            )})}
        </div>
    )
}