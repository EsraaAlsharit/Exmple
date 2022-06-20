from django.db import models


class Show(models.Model):
    title = models.TextField()
    network = models.TextField()
    releaseDate = models.DateField()
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
