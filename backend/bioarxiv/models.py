from django.db import models

class Paper(models.Model):
    title = models.CharField(max_length=1000)
    author = models.CharField(max_length=1000)
    date = models.CharField(max_length=250)
    category = models.CharField(max_length=250)
    abstract = models.TextField()

    class Meta:
        ordering = ('-date',)

    def __str__self():
        return self.title
