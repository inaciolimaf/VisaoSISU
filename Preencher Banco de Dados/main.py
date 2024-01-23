import pandas as pd
import requests

df = pd.read_excel("ResultadoDia1.xlsx").fillna(0)
for i, lines in df.iterrows():
    data={
        "AnoSISU": "2024.1",
        "CodigoSISU": lines[0],
        "CodigoIES": lines[1],
        "Universidade": lines[2],
        "Nome_Estado": lines[3],
        "Nome_Municipio_Campus": lines[4],
        "Campus": lines[5],
        "Nome_Curso": lines[6],
        "Grau": lines[7],
        "Turno": lines[8],
        "Cota": lines[9],
        "Quant_Vagas_Cota": lines[10],
        "Minimo_Nota_CN": lines[11],
        "Peso_Nota_CN": lines[12],
        "Minimo_Nota_MT": lines[13],
        "Peso_Nota_MT": lines[14],
        "Minimo_Nota_L": lines[15],
        "Peso_Nota_L": lines[16],
        "Minimo_Nota_CH": lines[17],
        "Peso_Nota_CH": lines[18],
        "Minimo_Nota_REDACAO": lines[19],
        "Peso_Nota_REDACAO": lines[20],
        "Media_Minima": lines[21],
        "Bonus_Percentual": lines[22],
        "Nota_Corte_1_Dia": lines[23],
        # "Diferenca_Corte_1_Para_2_Dia": lines[24],
        # "Nota_Corte_2_Dia": lines[25],
        # "Diferenca_Corte_2_Para_3_Dia": lines[26],
        # "Nota_Corte_3_Dia": lines[27],
        # "Diferenca_Corte_3_Para_4_Dia": lines[28],
        # "Nota_Corte_4_Dia": lines[29],
        # "Diferenca_Corte_4_Para_5_Dia": lines[30],
        # "Nota_Corte_5_Dia": lines[31],
        # "Diferenca_Corte_5_Para_6_Dia": lines[32],
        # "Nota_Corte_6_Dia": lines[33],
        # "Diferenca_Corte_6_Para_7_Dia": lines[34],
        # "Nota_Corte_7_Dia": lines[35],
        # "Diferenca_Corte_7_Para_8_Dia": lines[36],
        # "Nota_Corte_8_Dia": lines[37],
        # "Diferenca_Corte_8_Para_9_Dia": lines[38],
        # "Nota_Corte_9_Dia": lines[39]
    }
    keysDosDias = ["Nota_Corte_1_Dia",
        "Diferenca_Corte_1_Para_2_Dia",
        "Nota_Corte_2_Dia",
        "Diferenca_Corte_2_Para_3_Dia",
        "Nota_Corte_3_Dia",
        "Diferenca_Corte_3_Para_4_Dia",
        "Nota_Corte_4_Dia",
        "Diferenca_Corte_4_Para_5_Dia",
        "Nota_Corte_5_Dia",
        "Diferenca_Corte_5_Para_6_Dia",
        "Nota_Corte_6_Dia",
        "Diferenca_Corte_6_Para_7_Dia",
        "Nota_Corte_7_Dia",
        "Diferenca_Corte_7_Para_8_Dia",
        "Nota_Corte_8_Dia",
        "Diferenca_Corte_8_Para_9_Dia",
        "Nota_Corte_9_Dia"]
    for key in keysDosDias:
        if key not in data.keys():
            data[key] = -1
    request = requests.post("http://127.0.0.1:8000/api/v1/sisu/", data=data)
    if request.status_code != 201:
        print(request.status_code, lines)
        break
    print(f"{request.status_code} {i}")