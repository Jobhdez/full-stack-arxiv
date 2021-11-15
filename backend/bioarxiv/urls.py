from django.urls import path
from . import views

app_name = 'paper'

urlpatterns = [
    # paper views
    path('', views.paper_list, name='paper_list'),
    ]
