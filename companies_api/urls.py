from django.urls import path
from . import views

urlpatterns = [
  path('api/company', views.CompanyList.as_view(), name='company_list'),
  path('api/company/<int:pk>', views.CompanyDetailById.as_view(), name="company_detail"),
  path('api/company/<str:name>', views.CompanyDetailByString.as_view(), name="company_detail"),
]