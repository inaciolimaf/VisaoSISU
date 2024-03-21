import {FaGithub, FaInstagram, FaYoutube} from "react-icons/fa"

import styles from "./Footer.module.css"
function Footer(props){
    return (<footer className={styles.footer}>
        <p>Criado por <strong>Inácio Filho</strong></p>
        <p>Contatos: </p>
        <ul className={styles.list}>
            <a target="_blank" href="https://github.com/inaciolimaf/VisaoSISU/tree/main">
                <li>
                    <FaGithub/>
                </li>
            </a>
            <a target="_blank" href="https://www.instagram.com/inaciosl/">
                <li>
                    <FaInstagram/>
                </li>
            </a>
            <a target="_blank" href="https://www.youtube.com/channel/UC7U9IzmONeXBgjt9TcZCN-A/featured">
                <li>
                    <FaYoutube/>
                </li>
            </a>
        </ul>
    </footer>)
}
export default Footer