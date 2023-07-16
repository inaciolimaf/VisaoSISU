import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"
import Container from "./layout/Container"
import logo from "../../img/Logo.png"
function NavBar(props){
    return (
        <nav class={styles.navBar}>
            <Link to="/" class={styles.logo}> <img src={logo} alt="Visão SISU"/></Link>
            <ul class={styles.list}>
                <li class={styles.linksAbas}>
                    <Link exact to="/" class={styles.links}>Notas</Link>
                </li>
                <li class={styles.linksAbas}>
                    <Link exact to="/about"class={styles.links}>Sobre</Link>
                </li>
            </ul>
        </nav>)
}
export default NavBar