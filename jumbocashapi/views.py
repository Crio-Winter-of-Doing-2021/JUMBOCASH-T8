from django.shortcuts import render
from django.http import HttpResponse
from .models import Retailer, Customer, Supplier, IncomeTransaction, ExpenseTransaction

from .serializers import (RetailerSerializer, CustomerSerializer,
SupplierSerializer, IncomeTransactionSerializer,ExpenseTransactionSerializer)

from rest_framework.generics import ListAPIView, CreateAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny, IsAuthenticated
from .permissions import (RetailerPermission, CustomerSupplierPermission, IncomeTransactionPermission,
                            ExpenseTransactionPermission)
import requests
 
class RetailerListView(ListAPIView):
    """Handles List of a Retailer object"""
    serializer_class    = RetailerSerializer


    def get_queryset(self):
        """Returns only the object related to current user"""
        user = self.request.user
        return Retailer.objects.filter(email=user)
    
    
class RetailerCreateView(CreateAPIView):
    """Handles Create of a Retailer object"""
    queryset            = Retailer.objects.all()
    serializer_class    = RetailerSerializer
    permission_classes = [AllowAny]


class RetailerUpdateRetriveDeleteView(RetrieveUpdateDestroyAPIView):
    """Handles update, retrive and delete of retailer obj"""
    queryset            = Retailer.objects.all()
    serializer_class    = RetailerSerializer

    permission_classes  = (IsAuthenticated, RetailerPermission)


class CustomerListCreateView(ListCreateAPIView):
    """Handles List and Create of a Customer object"""
    serializer_class    = CustomerSerializer

    def perform_create(self, serializer):
        serializer.save(ret=self.request.user)

    def get_queryset(self):
        """Returns only the objects related to current user"""
        user = self.request.user
        return Customer.objects.filter(ret=user)


class CustomerUpdateRetriveDeleteView(RetrieveUpdateDestroyAPIView):
    """Handles update, retrive and delete of Customer obj"""
    queryset            = Customer.objects.all()
    serializer_class    = CustomerSerializer
    permission_classes  = (IsAuthenticated, CustomerSupplierPermission)


class SupplierListCreateView(ListCreateAPIView):
    """Handles List and Create of a Supplier object"""
    serializer_class    = SupplierSerializer

    def perform_create(self, serializer):
        serializer.save(ret=self.request.user)

    def get_queryset(self):
        """Returns only the objects related to current user"""
        user = self.request.user
        return Supplier.objects.filter(ret=user)


class SupplierUpdateRetriveDeleteView(RetrieveUpdateDestroyAPIView):
    """Handles update, retrive and delete of Supplier obj"""
    queryset            = Supplier.objects.all()
    serializer_class    = SupplierSerializer
    permission_classes  = (IsAuthenticated, CustomerSupplierPermission)


class IncomeTransactionListCreateView(ListCreateAPIView):
    """Handles List and Create of a IncomeTransaction object"""
    #queryset            = IncomeTransaction.objects.all()
    serializer_class    = IncomeTransactionSerializer

    def get_queryset(self):
        """Returns only the objects related to current user"""
        user = self.request.user
        customerlist = list(user.customer_set.all())
        print(customerlist)

        userIncomeTrans = IncomeTransaction.objects.none()

        for cust in customerlist:
            userIncomeTrans = userIncomeTrans | cust.incometransaction_set.all()

        return userIncomeTrans


class IncomeTransactionUpdateRetriveDeleteView(RetrieveUpdateDestroyAPIView):
    """Handles update, retrive and delete of IncomeTransaction obj"""
    queryset            = IncomeTransaction.objects.all()
    serializer_class    = IncomeTransactionSerializer
    permission_classes  = (IsAuthenticated, IncomeTransactionPermission)

    


class ExpenseTransactionListCreateView(ListCreateAPIView):
    """Handles List and Create of a ExpenseTransaction object"""
    #queryset            = ExpenseTransaction.objects.all()
    serializer_class    = ExpenseTransactionSerializer

    def get_queryset(self):
        """Returns only the objects related to current user"""
        user = self.request.user
        supplierlist = list(user.supplier_set.all())

        userExpTrans = ExpenseTransaction.objects.none()

        for sup in supplierlist:
            userExpTrans = userExpTrans | sup.expensetransaction_set.all()

        return userExpTrans


class ExpenseTransactionUpdateRetriveDeleteView(RetrieveUpdateDestroyAPIView):
    """Handles update, retrive and delete of ExpenseTransaction obj"""
    queryset            = ExpenseTransaction.objects.all()
    serializer_class    = ExpenseTransactionSerializer
    permission_classes  = (IsAuthenticated, ExpenseTransactionPermission)

