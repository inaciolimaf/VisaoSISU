## API - Visão SISU

A API do site inicialmente foi desenvolvida em Django, mas foi refatorada e atualmente está implementada em NodeJS.

### Rotas da API

A API possui as seguintes rotas:

- `POST /anos`
- `POST /universidades`
- `POST /campus`
- `POST /cursos`
- `POST /graus`
- `POST /turnos`
- `POST /completo`

### Exemplo de Uso

#### Rota: `POST /completo`

Essa rota retorna informações detalhadas sobre cursos disponíveis, filtradas pelos parâmetros fornecidos.

**Exemplo de Corpo da Requisição (Request Body):**

```json
{
    "anoSISU": "2023.1",
    "universidade": "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO CEARÁ",
    "campus": "CAMPUS SOBRAL",
    "nome_curso": "MATEMÁTICA",
    "grau": "Licenciatura",
    "turno": "Matutino"
}
```
**Exemplo de Resposta (Response):**
```
[
    {
        "id": 71204,
        "AnoSISU": "2023.1",
        "CodigoSISU": 265790,
        "CodigoIES": 1807,
        "Universidade": "INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO CEARÁ",
        "Nome_Estado": "CE",
        "Nome_Municipio_Campus": "Sobral",
        "Campus": "CAMPUS SOBRAL",
        "Nome_Curso": "MATEMÁTICA",
        "Grau": "Licenciatura",
        "Turno": "Matutino",
        "Cota": "Ampla concorrência",
        "Quant_Vagas_Cota": 16,
        "Minimo_Nota_CN": 1,
        "Peso_Nota_CN": 2,
        "Minimo_Nota_MT": 1,
        "Peso_Nota_MT": 3,
        "Minimo_Nota_L": 1,
        "Peso_Nota_L": 2,
        "Minimo_Nota_CH": 1,
        "Peso_Nota_CH": 1,
        "Minimo_Nota_REDACAO": 1,
        "Peso_Nota_REDACAO": 2,
        "Media_Minima": 0.01,
        "Bonus_Percentual": 0,
        "Nota_Corte_1_Dia": 750.91,
        "Diferenca_Corte_1_Para_2_Dia": 20.04000000000008,
        "Nota_Corte_2_Dia": 770.95,
        "Diferenca_Corte_2_Para_3_Dia": 0,
        "Nota_Corte_3_Dia": 770.95,
        "Diferenca_Corte_3_Para_4_Dia": 9.769999999999982,
        "Nota_Corte_4_Dia": 780.72,
        "Diferenca_Corte_4_Para_5_Dia": 4.819999999999936,
        "Nota_Corte_5_Dia": 785.54,
        "Diferenca_Corte_5_Para_6_Dia": -1.539999999999964,
        "Nota_Corte_6_Dia": 784,
        "Diferenca_Corte_6_Para_7_Dia": 4.600000000000023,
        "Nota_Corte_7_Dia": 788.6,
        "Diferenca_Corte_7_Para_8_Dia": 9.5,
        "Nota_Corte_8_Dia": 798.1,
        "Diferenca_Corte_8_Para_9_Dia": -21.38999999999999,
        "Nota_Corte_9_Dia": 776.71
    }
]
```