interface Nota {
    status: string;
    AnoSISU: string;
    CodigoSISU: number;
    CodigoIES: number;
    Universidade: string
    Nome_Estado: string
    Nome_Municipio_Campus: string
    Campus: string
    Nome_Curso: string
    Grau: string
    Turno: string
    Cota: string
    Quant_Vagas_Cota: number
    Peso_Nota_CN: number
    Minimo_Nota_CN: number
    Minimo_Nota_MT: number
    Peso_Nota_MT: number
    Minimo_Nota_L: number
    Peso_Nota_L: number
    Minimo_Nota_CH: number
    Peso_Nota_CH: number
    Minimo_Nota_REDACAO: number
    Peso_Nota_REDACAO: number
    Media_Minima: number
    Bonus_Percentual: number
    Nota_Corte_1_Dia: number
    [key: string]: any;
}
export {Nota};