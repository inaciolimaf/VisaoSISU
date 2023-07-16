import {FaGithub, FaInstagram, FaYoutube} from "react-icons/fa"

import styles from "./Footer.module.css"
function Footer(props){
    return (<footer className={styles.footer}>
        <ul className={styles.list}>
            <a href="https://github.com/inaciolimaf/VisaoSISU/tree/main">
                <li>
                    <FaGithub/>
                </li>
            </a>
            <a href="https://www.instagram.com/inaciosl/">
                <li>
                    <FaInstagram/>
                </li>
            </a>
            <a href="https://www.youtube.com/channel/UC7U9IzmONeXBgjt9TcZCN-A/featured">
                <li>
                    <FaYoutube/>
                </li>
            </a>
        </ul>
    </footer>)
}
export default Footer