import styles from "./Home.module.css"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
function Home(){
    return (
        <div className={styles.home}>
            <h1>VISUALIZE AS <strong>NOTAS</strong> DE CORTE ANTERIORES DE UMA MANEIRA <strong>FÁCIL</strong></h1>
            <p>E COM OS DETALHES PARA CADA PRÉVIA</p>
            <div className={styles.autoComplete}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={[{label:"2023.1"}, {label:"2023.2"}]}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            </div>
        </div>
    )
}
export default Home