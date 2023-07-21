# from rest_framework import generics
# from models import SISU
# from serializers import SISUSerializer

# class SISUAPIView(generics.ListCreateAPIView):
#     queryset = SISU.objects.all()
#     serializer_class = SISUSerializer
from django.db import connection
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import SISU
from .serializers import SISUSerializer, SISUSerializerUniversidade, SISUSerializerAno, SISUSerializerCampus, SISUSerializerCursos, SISUSerializerGrau, SISUSerializerTurno


class SISUAPIView(APIView):
    """
    API SISU
    """
    def post(self, request):
        if "Turno" in request.data and "Grau" in request.data and "Nome_Curso" in request.data and "Campus" in request.data and"Universidade" in request.data and "AnoSISU" in request.data:
            sisu = SISU.objects.raw('SELECT DISTINCT "api_sisu"."id", "api_sisu"."Turno" FROM "api_sisu" WHERE "api_sisu"."AnoSISU"=%s AND "api_sisu"."Universidade"=%s AND "api_sisu"."Campus"=%s AND "api_sisu"."Nome_Curso"=%s AND "api_sisu"."Grau"=%s AND "api_sisu"."Turno"=%s', params=(request.data["AnoSISU"], request.data["Universidade"], request.data["Campus"], request.data["Nome_Curso"], request.data["Grau"], request.data["Turno"]))
            serializer = SISUSerializer(sisu, many=True)
        elif "Grau" in request.data and "Nome_Curso" in request.data and "Campus" in request.data and"Universidade" in request.data and "AnoSISU" in request.data:
            sisu = SISU.objects.raw('SELECT DISTINCT "api_sisu"."id", "api_sisu"."Grau" FROM "api_sisu" WHERE "api_sisu"."AnoSISU"=%s AND "api_sisu"."Universidade"=%s AND "api_sisu"."Campus"=%s AND "api_sisu"."Nome_Curso"=%s AND "api_sisu"."Grau"=%s GROUP BY "api_sisu"."Turno"', params=(request.data["AnoSISU"], request.data["Universidade"], request.data["Campus"], request.data["Nome_Curso"], request.data["Grau"]))
            serializer = SISUSerializerTurno(sisu, many=True)
        elif "Nome_Curso" in request.data and "Campus" in request.data and"Universidade" in request.data and "AnoSISU" in request.data:
            sisu = SISU.objects.raw('SELECT DISTINCT "api_sisu"."id", "api_sisu"."Nome_Curso" FROM "api_sisu" WHERE "api_sisu"."AnoSISU"=%s AND "api_sisu"."Universidade"=%s AND "api_sisu"."Campus"=%s AND "api_sisu"."Nome_Curso"=%s GROUP BY "api_sisu"."Grau"', params=(request.data["AnoSISU"], request.data["Universidade"], request.data["Campus"], request.data["Nome_Curso"]))
            serializer = SISUSerializerGrau(sisu, many=True)
        elif "Campus" in request.data and"Universidade" in request.data and "AnoSISU" in request.data:
            sisu = SISU.objects.raw('SELECT DISTINCT "api_sisu"."id", "api_sisu"."Campus" FROM "api_sisu" WHERE "api_sisu"."AnoSISU"=%s AND "api_sisu"."Universidade"=%s AND "api_sisu"."Campus"=%s GROUP BY "api_sisu"."Nome_Curso"', params=(request.data["AnoSISU"], request.data["Universidade"], request.data["Campus"]))
            serializer = SISUSerializerCursos(sisu, many=True)
        elif "Universidade" in request.data and "AnoSISU" in request.data:
            sisu = SISU.objects.raw('SELECT DISTINCT "api_sisu"."id", "api_sisu"."Universidade" FROM "api_sisu" WHERE "api_sisu"."AnoSISU"=%s AND "api_sisu"."Universidade"=%s GROUP BY "api_sisu"."Campus"', params=(request.data["AnoSISU"], request.data["Universidade"]))
            serializer = SISUSerializerCampus(sisu, many=True)
        elif "AnoSISU" in request.data:
            sisu = SISU.objects.raw('SELECT DISTINCT "api_sisu"."id", "api_sisu"."Universidade" FROM "api_sisu" WHERE "api_sisu"."AnoSISU"=%s GROUP BY "api_sisu"."Universidade"', params=(request.data["AnoSISU"], ))
            serializer = SISUSerializerUniversidade(sisu, many=True)
        else:
            sisu = SISU.objects.raw('SELECT DISTINCT "api_sisu"."id", "api_sisu"."AnoSISU" FROM "api_sisu" GROUP BY "api_sisu"."AnoSISU"')
            serializer = SISUSerializerAno(sisu, many=True)
        # Serve para retornar os dados dependendo do que foi recebido
        # Se não receber retornar o ano
        # Se receber o ano retorna as instituições
        # E assim por diante
        return Response(serializer.data)

    # Para preencher os dados do banco
    # def post(self, request):
    #     serializer = SISUSerializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     return Response(serializer.data, status=status.HTTP_201_CREATED)

