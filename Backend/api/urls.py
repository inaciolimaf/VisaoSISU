from django.urls import path

from .views import SISUAPIView

urlpatterns = [
    path('sisu/', SISUAPIView.as_view(), name='sisu'),
]