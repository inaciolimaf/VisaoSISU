import styles from "./Home.module.css"
import { useState, useEffect } from "react"
import Input from "../Input"
function Home(){
    const [anos, setAnos] = useState([])
    function createPost(setFunction, content){
        useEffect(()=>{
            fetch("http://54.89.40.174/api/v1/sisu/",{
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.parse(content)
            }).then((resp)=>resp.json()).then((data)=> {
                setFunction(data)
            }).catch((error)=>console.log(error))
        }, [])
    }
    createPost(setAnos, '{"AnoSISU": "2023.1"}')
    console.log({
        "AnoSISU": "2023.1"
    })
    return (
        <div className={styles.home}>
            <h1>VISUALIZE AS <strong>NOTAS</strong> DE CORTE ANTERIORES DE UMA MANEIRA <strong>FÁCIL</strong></h1>
            <p>E COM OS DETALHES PARA CADA PRÉVIA</p>
            <form>
                <Input Titulo="Edição"/>
                <Input Titulo="Instituição"/>
                <Input Titulo="Local de oferta"/>
                <Input Titulo="Curso"/>
                <Input Titulo="Grau"/>
                <Input Titulo="Turno"/>
            </form>
            <div className={styles.buttonContainer}>
                <button id={styles.button}>PESQUISAR</button>
            </div>
        </div>
    )
}
export default Home