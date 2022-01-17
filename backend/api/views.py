from rest_framework import generics
from bioarxiv.models import Paper
from .serializers import PaperSerializer

class PaperList(generics.ListCreateAPIView):
    queryset = Paper.objects.all()
    serializer_class = PaperSerializer

class PaperDetail(generics.RetrieveDestroyAPIView):
    queryset = Paper.objects.all()
    serializer_class = PaperSerializer

class PaperListDetailfilter(generics.ListAPIView):
    queryset = Paper.objects.all()
    serializer_class = PaperSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['^category']

