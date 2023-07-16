import pandas as pd
import requests

df = pd.read_excel("ResultadoDia9.xlsx")

preencher_completo = False
preencher_universidades = True

if preencher_completo:
    for i, line in df.iterrows():
        request = requests.post("http://127.0.0.1:8000/api/v1/sisu/", data={
            "AnoSISU": "2023.1",
            "CodigoSISU": line[0],
            "CodigoIES": line[1],
            "Universidade": line[2],
            "Nome_Estado": line[3],
            "Nome_Municipio_Campus": line[4],
            "Campus": line[5],
            "Nome_Curso": line[6],
            "Grau": line[7],
            "Turno": line[8],
            "Cota": line[9],
            "Quant_Vagas_Cota": line[10],
            "Minimo_Nota_CN": line[11],
            "Peso_Nota_CN": line[12],
            "Minimo_Nota_MT": line[13],
            "Peso_Nota_MT": line[14],
            "Minimo_Nota_L": line[15],
            "Peso_Nota_L": line[16],
            "Minimo_Nota_CH": line[17],
            "Peso_Nota_CH": line[18],
            "Minimo_Nota_REDACAO": line[19],
            "Peso_Nota_REDACAO": line[20],
            "Media_Minima": line[21],
            "Bonus_Percentual": line[22],
            "Nota_Corte_1_Dia": line[23],
            "Diferenca_Corte_1_Para_2_Dia": line[24],
            "Nota_Corte_2_Dia": line[25],
            "Diferenca_Corte_2_Para_3_Dia": line[26],
            "Nota_Corte_3_Dia": line[27],
            "Diferenca_Corte_3_Para_4_Dia": line[28],
            "Nota_Corte_4_Dia": line[29],
            "Diferenca_Corte_4_Para_5_Dia": line[30],
            "Nota_Corte_5_Dia": line[31],
            "Diferenca_Corte_5_Para_6_Dia": line[32],
            "Nota_Corte_6_Dia": line[33],
            "Diferenca_Corte_6_Para_7_Dia": line[34],
            "Nota_Corte_7_Dia": line[35],
            "Diferenca_Corte_7_Para_8_Dia": line[36],
            "Nota_Corte_8_Dia": line[37],
            "Diferenca_Corte_8_Para_9_Dia": line[38],
            "Nota_Corte_9_Dia": line[39]
        })
        if request.status_code != 201:
            print(request.status_code, line)
            break
        print(f"{request.status_code} {i}")
if preencher_universidades:
    universidadesUnicas = list(set(df['Universidade']))
    for i, universide in enumerate(universidadesUnicas):
        request = requests.post("http://127.0.0.1:8000/api/v1/universidades", data={"AnoSISU": "2023.1", "Universidade": universide})
        if request.status_code != 201:
            print(request.status_code)
            break
        print(f"{request.status_code} {i}")