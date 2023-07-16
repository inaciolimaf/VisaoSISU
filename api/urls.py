from django.urls import path

from .views import SISUAPIView, UniversidadesAPIView

urlpatterns = [
    path('sisu/', SISUAPIView.as_view(), name='sisu'),
    path('universidades', UniversidadesAPIView.as_view(), name='Universidades')
]