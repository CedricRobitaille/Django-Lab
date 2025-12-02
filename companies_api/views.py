from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import CompanySerializer
from .models import Company

class CompanyList(generics.ListCreateAPIView):
  queryset = Company.objects.all().order_by("id")
  serializer_class = CompanySerializer

class CompanyDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Company.objects.all().order_by("id")
  serializer_class = CompanySerializer