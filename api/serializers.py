from rest_framework import serializers

from .models import SISU


class SISUSerializer(serializers.ModelSerializer):
    class Meta:
        model = SISU
        fields = ['AnoSISU',
                  'CodigoSISU',
                  'CodigoIES',
                  'Universidade',
                  'Nome_Estado',
                  'Nome_Municipio_Campus',
                  'Campus',
                  'Nome_Curso',
                  'Grau',
                  'Turno',
                  'Cota',
                  'Quant_Vagas_Cota',
                  'Minimo_Nota_CN',
                  'Peso_Nota_CN',
                  'Minimo_Nota_MT',
                  'Peso_Nota_MT',
                  'Minimo_Nota_L',
                  'Peso_Nota_L',
                  'Minimo_Nota_CH',
                  'Peso_Nota_CH',
                  'Minimo_Nota_REDACAO',
                  'Peso_Nota_REDACAO',
                  'Media_Minima',
                  'Bonus_Percentual',
                  'Nota_Corte_1_Dia',
                  'Diferenca_Corte_1_Para_2_Dia',
                  'Nota_Corte_2_Dia',
                  'Diferenca_Corte_2_Para_3_Dia',
                  'Nota_Corte_3_Dia',
                  'Diferenca_Corte_3_Para_4_Dia',
                  'Nota_Corte_4_Dia',
                  'Diferenca_Corte_4_Para_5_Dia',
                  'Nota_Corte_5_Dia',
                  'Diferenca_Corte_5_Para_6_Dia',
                  'Nota_Corte_6_Dia',
                  'Diferenca_Corte_6_Para_7_Dia',
                  'Nota_Corte_7_Dia',
                  'Diferenca_Corte_7_Para_8_Dia',
                  'Nota_Corte_8_Dia',
                  'Diferenca_Corte_8_Para_9_Dia',
                  'Nota_Corte_9_Dia']

class SISUSerializerUniversidade(serializers.ModelSerializer):
    class Meta:
        model = SISU
        fields = ['Universidade']
class SISUSerializerAno(serializers.ModelSerializer):
    class Meta:
        model = SISU
        fields = ['AnoSISU']
class SISUSerializerCampus(serializers.ModelSerializer):
    class Meta:
        model = SISU
        fields = ['Campus']

class SISUSerializerCursos(serializers.ModelSerializer):
    class Meta:
        model = SISU
        fields = ['Nome_Curso']
class SISUSerializerGrau(serializers.ModelSerializer):
    class Meta:
        model = SISU
        fields = ['Grau']

class SISUSerializerTurno(serializers.ModelSerializer):
    class Meta:
        model = SISU
        fields = ['Turno']