from rest_framework import serializers
from bioarxiv.models import Paper

class PaperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paper
        fields = ('title', 'author', 'date', 'category', 'abstract')
