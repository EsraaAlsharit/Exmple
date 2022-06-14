from django.db import models

# Ninja
class Dojos(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
class Ninja(models.Model):
    dojo = models.ForeignKey(Dojos, related_name="dojos", on_delete = models.CASCADE)
    fname = models.CharField(max_length=255)
    lname = models.CharField(max_length=255)


