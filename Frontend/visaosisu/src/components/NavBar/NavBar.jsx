import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"
import logo from "../../../img/Logo.png"
function NavBar(props){
    return (
        <nav className={styles.navBar}>
            <Link to="/" className={styles.logo}> <img src={logo} alt="Visão SISU"/></Link>
            <ul className={styles.list}>
                <li className={styles.linksAbas}>
                    <Link exact to="/" className={styles.links}>Notas</Link>
                </li>
                <li className={styles.linksAbas}>
                    <Link exact to="/about"className={styles.links}>Sobre</Link>
                </li>
            </ul>
        </nav>)
}
export default NavBar