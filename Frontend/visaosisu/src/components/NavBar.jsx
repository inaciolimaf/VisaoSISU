import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"
import Container from "./layout/Container"
import logo from "../../img/Logo.png"
function NavBar(props){
    return (
        <nav className={styles.navBar}>
            <Link to="/" className={styles.logo}> <img src={logo} alt="Visão SISU"/></Link>
            <ul className={styles.list}>
                <li className={styles.linksAbas}>
                    <Link exact to="/" class={styles.links}>Notas</Link>
                </li>
                <li className={styles.linksAbas}>
                    <Link exact to="/about"class={styles.links}>Sobre</Link>
                </li>
            </ul>
        </nav>)
}
export default NavBar