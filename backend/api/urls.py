from django.urls import path
from .views import PaperList, PaperDetail, PaperListDetailfilter 

app_name = 'api'

urlpatterns = [
    path('<int:pk>/', PaperDetail.as_view(), name='detailcreate'),
    path('search/', PaperListDetailfilter.as_view(), name='papersearch'),
    path('', PaperList.as_view(), name='listcreate'),
    ]
