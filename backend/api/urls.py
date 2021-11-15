from django.urls import path
from .views import PaperList, PaperDetail

app_name = 'api'

urlpatterns = [
    path('<int:pk>/', PaperDetail.as_view(), name='detailcreate'),
    path('', PaperList.as_view(), name='listcreate'),
    ]
