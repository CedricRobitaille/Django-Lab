from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import LocationSerializer
from .models import Location

class LocationList(generics.ListCreateAPIView):
  queryset = Location.objects.all().order_by("id")
  serializer_class = LocationSerializer

class LocationDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Location.objects.all().order_by("id")
  serializer_class = LocationSerializer
