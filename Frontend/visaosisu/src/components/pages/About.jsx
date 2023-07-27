import styles from "./About.module.css"
function About(){
    return (
        <div className={styles.sobre}>
            <h1>Sobre:</h1>
            <p>Está página foi desenvolvida por Inácio Filho.</p>
            <p>
                As informações são de uma mineração dos dados do SISU usando Selenium e Pandas.
                O código fonte e o resultado obtido se encontra no <a target="_blank" href="https://github.com/inaciolimaf/Sisu-Dados">repositório do GitHub</a>.
            </p>
            <p>
                Já o front-end foi desenvolvido com React e o back-end em Django. Todo o código, tanto do front quanto do back, também está no <a target="_blank" href="https://github.com/inaciolimaf/VisaoSISU">repositório do GitHub</a>.
            </p>
        </div>
    )
}
export default About