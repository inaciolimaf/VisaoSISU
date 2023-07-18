import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styles from './Input.module.css'
export default function Input(props){
    const { innerWidth: largura} = window;
    let larguraInput
    if (largura>750) {
        larguraInput=600
    }
    else{
        larguraInput = largura*0.8
    }
    return (
        <div className={styles.autoComplete}>
            <div className={styles.Grupo}>
                <span>{`${props.Titulo}: `}<span className={styles.obrigatorio}>*</span></span>
                <Autocomplete
                    disablePortal
                    label="testea"
                    id={props.id}
                    noOptionsText="Nenhum registro encontrado"
                    options={props.options|| []}
                    sx={{ width: larguraInput}}
                    onChange={props.onChange}
                    renderInput={(params) => <TextField {...params} label={props.Titulo} />}
                />
            </div>
        </div>
        )
}