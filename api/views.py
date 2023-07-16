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

from .models import SISU, SISUUniversidades
from .serializers import SISUSerializer, SISUSerializerUniversidades

class SISUAPIView(APIView):
    """
    API SISU
    """
    def get(self, request):
        sisu = SISU.objects.all()
        serializer = SISUSerializer(sisu, many=True)
        return Response(serializer.data)
    
    # def post(self, request):
    #     serializer = SISUSerializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     return Response(serializer.data, status=status.HTTP_201_CREATED)
    
class UniversidadesAPIView(APIView):
    def get(self, request):
        universidades = SISUUniversidades.objects.all()
        serializer = SISUSerializerUniversidades(universidades, many=True)
        return Response(serializer.data)
    
    # def post(self, request):
    #     serializer = SISUSerializerUniversidades(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     return Response(serializer.data, status=status.HTTP_201_CREATED)
