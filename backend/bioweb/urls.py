from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('bioarxiv/', include('bioarxiv.urls', namespace='bioarxiv')),
    path('api/', include('api.urls', namespace='api')),
]
