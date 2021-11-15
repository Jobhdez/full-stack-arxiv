from rest_framework import generics
from bioarxiv.models import Paper
from .serializers import PaperSerializer

class PaperList(generics.ListCreateAPIView):
    queryset = Paper.objects.all()
    serializer_class = PaperSerializer

class PaperDetail(generics.RetrieveDestroyAPIView):
    queryset = Paper.objects.all()
    serializer_class = PaperSerializer

