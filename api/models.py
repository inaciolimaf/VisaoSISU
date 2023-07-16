from django.db import models

class SISU(models.Model):
    AnoSISU = models.CharField(max_length=2047)
    CodigoSISU = models.IntegerField()
    CodigoIES = models.IntegerField()
    Universidade = models.CharField(max_length=2047)
    Nome_Estado = models.CharField(max_length=2047)
    Nome_Municipio_Campus = models.CharField(max_length=2047)
    Campus = models.CharField(max_length=2047)
    Nome_Curso = models.CharField(max_length=2047)
    Grau = models.CharField(max_length=2047)
    Turno = models.CharField(max_length=2047)
    Cota = models.CharField(max_length=2047)
    Quant_Vagas_Cota = models.FloatField()
    Minimo_Nota_CN = models.FloatField()
    Peso_Nota_CN = models.FloatField()
    Minimo_Nota_MT = models.FloatField()
    Peso_Nota_MT = models.FloatField()
    Minimo_Nota_L = models.FloatField()
    Peso_Nota_L = models.FloatField()
    Minimo_Nota_CH = models.FloatField()
    Peso_Nota_CH = models.FloatField()
    Minimo_Nota_REDACAO = models.FloatField()
    Peso_Nota_REDACAO = models.FloatField()
    Media_Minima = models.FloatField()
    Bonus_Percentual = models.FloatField()
    Nota_Corte_1_Dia = models.FloatField()
    Diferenca_Corte_1_Para_2_Dia = models.FloatField()
    Nota_Corte_2_Dia = models.FloatField()
    Diferenca_Corte_2_Para_3_Dia = models.FloatField()
    Nota_Corte_3_Dia = models.FloatField()
    Diferenca_Corte_3_Para_4_Dia = models.FloatField()
    Nota_Corte_4_Dia = models.FloatField()
    Diferenca_Corte_4_Para_5_Dia = models.FloatField()
    Nota_Corte_5_Dia = models.FloatField()
    Diferenca_Corte_5_Para_6_Dia = models.FloatField()
    Nota_Corte_6_Dia = models.FloatField()
    Diferenca_Corte_6_Para_7_Dia = models.FloatField()
    Nota_Corte_7_Dia = models.FloatField()
    Diferenca_Corte_7_Para_8_Dia = models.FloatField()
    Nota_Corte_8_Dia = models.FloatField()
    Diferenca_Corte_8_Para_9_Dia = models.FloatField()
    Nota_Corte_9_Dia = models.FloatField()
    
    class Meta:
        verbose_name = 'Nota'
        verbose_name_plural = 'Notas'
        
    def __str__(self):
        return str(self.CodigoSISU)
class SISUUniversidades(models.Model):
    AnoSISU = models.CharField(max_length=255)
    Universidade = models.CharField(max_length=2047)
      
    class Meta:
        verbose_name = 'Universidade'
        verbose_name_plural = 'Universidades'
        
    def __str__(self):
        return str(self.Universidade)