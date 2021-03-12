from django.shortcuts import render
from .models import Retailer
from .serializers import RetailerSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView


 
class RetailerListCreateView(ListCreateAPIView):
    """Handles List and Create of a Retailer object"""
    queryset            = Retailer.objects.all()
    serializer_class    = RetailerSerializer


class RetailerUpdateRetriveDeleteView(RetrieveUpdateDestroyAPIView):
    """Handles update, retrive and delete of retailer obj"""
    queryset            = Retailer.objects.all()
    serializer_class    = RetailerSerializer