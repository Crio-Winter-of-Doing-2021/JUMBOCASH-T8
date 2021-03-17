from django.shortcuts import render
from .models import Retailer, Customer, Supplier, IncomeTransaction, ExpenseTransaction

from .serializers import (RetailerSerializer, CustomerSerializer,
SupplierSerializer, IncomeTransactionSerializer,ExpenseTransactionSerializer)

from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.authentication import TokenAuthentication


 
class RetailerListCreateView(ListCreateAPIView):
    """Handles List and Create of a Retailer object"""
    queryset            = Retailer.objects.all()
    serializer_class    = RetailerSerializer


class RetailerUpdateRetriveDeleteView(RetrieveUpdateDestroyAPIView):
    """Handles update, retrive and delete of retailer obj"""
    queryset            = Retailer.objects.all()
    serializer_class    = RetailerSerializer


class CustomerListCreateView(ListCreateAPIView):
    """Handles List and Create of a Customer object"""
    queryset            = Customer.objects.all()
    serializer_class    = CustomerSerializer


class CustomerUpdateRetriveDeleteView(RetrieveUpdateDestroyAPIView):
    """Handles update, retrive and delete of Customer obj"""
    queryset            = Customer.objects.all()
    serializer_class    = CustomerSerializer


class SupplierListCreateView(ListCreateAPIView):
    """Handles List and Create of a Supplier object"""
    queryset            = Supplier.objects.all()
    serializer_class    = SupplierSerializer


class SupplierUpdateRetriveDeleteView(RetrieveUpdateDestroyAPIView):
    """Handles update, retrive and delete of Supplier obj"""
    queryset            = Supplier.objects.all()
    serializer_class    = SupplierSerializer


class IncomeTransactionListCreateView(ListCreateAPIView):
    """Handles List and Create of a IncomeTransaction object"""
    queryset            = IncomeTransaction.objects.all()
    serializer_class    = IncomeTransactionSerializer


class IncomeTransactionUpdateRetriveDeleteView(RetrieveUpdateDestroyAPIView):
    """Handles update, retrive and delete of IncomeTransaction obj"""
    queryset            = IncomeTransaction.objects.all()
    serializer_class    = IncomeTransactionSerializer


class ExpenseTransactionListCreateView(ListCreateAPIView):
    """Handles List and Create of a ExpenseTransaction object"""
    queryset            = ExpenseTransaction.objects.all()
    serializer_class    = ExpenseTransactionSerializer


class ExpenseTransactionUpdateRetriveDeleteView(RetrieveUpdateDestroyAPIView):
    """Handles update, retrive and delete of ExpenseTransaction obj"""
    queryset            = ExpenseTransaction.objects.all()
    serializer_class    = ExpenseTransactionSerializer