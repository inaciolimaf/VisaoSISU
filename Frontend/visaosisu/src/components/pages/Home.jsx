import styles from "./Home.module.css"
import Input from "../Input"
function Home(){
    function createPost(){
        fetch("http://54.89.40.174/api/v1/sisu/",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }
        }).then((resp)=>{
            console.log(resp)
            return resp.json()}).then((data)=> data)
    }
    console.log(createPost())
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