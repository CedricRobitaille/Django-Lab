from django.db import models

# Create your models here.

class Location(models.Model):
  street_number = models.IntegerField()
  street = models.CharField(max_length=32)
  city = models.CharField(max_length=48)
  state = models.CharField(max_length=14)