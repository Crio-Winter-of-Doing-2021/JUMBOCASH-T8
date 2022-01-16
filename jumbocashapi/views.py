from django.shortcuts import render
from django.http import HttpResponse
from .models import Retailer, Customer, Supplier, IncomeTransaction, ExpenseTransaction
from django.db.models import Q

from .serializers import (
    RetailerSerializer,
    CustomerSerializer,
    SupplierSerializer,
    IncomeTransactionSerializer,
    ExpenseTransactionSerializer,
)

from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny, IsAuthenticated

from rest_framework.filters import (
    SearchFilter,
    OrderingFilter,
)
from .permissions import (
    RetailerPermission,
    CustomerSupplierPermission,
    IncomeTransactionPermission,
    ExpenseTransactionPermission,
)

from .filters import IncomeTransactionFilter, ExpenseTransactionFilter
from django_filters import rest_framework as filters


from .pagination import MyPageNumberPagination


class RetailerListView(ListAPIView):
    """Handles List of a Retailer object"""

    serializer_class = RetailerSerializer
    filter_backends = [SearchFilter, OrderingFilter, filters.DjangoFilterBackend]
    pagination_class = MyPageNumberPagination
    search_fields = ["firstname", "lastname", "email", "business_name"]

    def get_queryset(self):
        """Returns only the object related to current user"""
        user = self.request.user
        queryset_list = Retailer.objects.filter(email=user)
        query = self.request.GET.get("q")
        if query:
            queryset_list = queryset_list.filter(
                Q(firstname__icontains=query)
                | Q(lastname__icontains=query)
                | Q(email__icontains=query)
                | Q(business_name__icontains=query)
            ).distinct()
        return queryset_list


class RetailerCreateView(CreateAPIView):
    """Handles Create of a Retailer object"""

    queryset = Retailer.objects.all()
    serializer_class = RetailerSerializer
    permission_classes = [AllowAny]


class RetailerUpdateRetriveDeleteView(RetrieveUpdateDestroyAPIView):
    """Handles update, retrive and delete of retailer obj"""

    queryset = Retailer.objects.all()
    serializer_class = RetailerSerializer

    permission_classes = (IsAuthenticated, RetailerPermission)


class CustomerListCreateView(ListCreateAPIView):
    """Handles List and Create of a Customer object"""

    serializer_class = CustomerSerializer
    pagination_class = MyPageNumberPagination
    filter_backends = [SearchFilter, OrderingFilter, filters.DjangoFilterBackend]
    filterset_fields = ("id", "firstname", "lastname", "mobile_no", "email_id")
    search_fields = [
        "firstname",
        "lastname",
        "mobile_no",
        "email_id",
        "ret__firstname",
        "ret__email",
    ]

    def perform_create(self, serializer):
        serializer.save(ret=self.request.user)

    def get_queryset(self):
        """Returns only the objects related to current user"""
        user = self.request.user
        queryset_list = Customer.objects.filter(ret=user).order_by("-id")
        queryset_list = self.filter_queryset(queryset_list)

        query = self.request.GET.get("q")
        if query:
            queryset_list = queryset_list.filter(
                Q(firstname__icontains=query)
                | Q(lastname__icontains=query)
                | Q(mobile_no__icontains=query)
                | Q(email_id__icontains=query)
                | Q(ret__firstname__icontains=query)
                | Q(ret__email__icontains=query)
            ).distinct()
        return queryset_list


class CustomerUpdateRetriveDeleteView(RetrieveUpdateDestroyAPIView):
    """Handles update, retrive and delete of Customer obj"""

    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = (IsAuthenticated, CustomerSupplierPermission)


class SupplierListCreateView(ListCreateAPIView):
    """Handles List and Create of a Supplier object"""

    serializer_class = SupplierSerializer
    filter_backends = [SearchFilter, OrderingFilter, filters.DjangoFilterBackend]
    pagination_class = MyPageNumberPagination
    filterset_fields = ("id", "firstname", "lastname", "mobile_no", "email_id")
    search_fields = [
        "firstname",
        "lastname",
        "mobile_no",
        "email_id",
        "ret__firstname",
        "ret__email",
    ]

    def perform_create(self, serializer):
        serializer.save(ret=self.request.user)

    def get_queryset(self):
        """Returns only the objects related to current user"""
        user = self.request.user
        queryset_list = Supplier.objects.filter(ret=user).order_by("-id")
        query = self.request.GET.get("q")
        if query:
            queryset_list = queryset_list.filter(
                Q(firstname__icontains=query)
                | Q(lastname__icontains=query)
                | Q(mobile_no__icontains=query)
                | Q(email_id__icontains=query)
                | Q(ret__firstname__icontains=query)
                | Q(ret__email__icontains=query)
            ).distinct()
        return queryset_list


class SupplierUpdateRetriveDeleteView(RetrieveUpdateDestroyAPIView):
    """Handles update, retrive and delete of Supplier obj"""

    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer
    permission_classes = (IsAuthenticated, CustomerSupplierPermission)


class IncomeTransactionListCreateView(ListCreateAPIView):
    """Handles List and Create of a IncomeTransaction object"""

    serializer_class = IncomeTransactionSerializer
    filter_backends = [SearchFilter, OrderingFilter, filters.DjangoFilterBackend]
    filterset_class = IncomeTransactionFilter
    pagination_class = MyPageNumberPagination
    search_fields = [
        "description",
        "note",
        "amount",
        "cust_id__firstname",
        "cust_id__email_id",
    ]

    def get_queryset(self):
        """Returns only the objects related to current user"""
        user = self.request.user
        queryset_list = IncomeTransaction.objects.filter(cust_id__ret=user).order_by(
            "-id"
        )
        queryset_list = self.filter_queryset(queryset_list)
        query = self.request.GET.get("q")
        if query:
            queryset_list = queryset_list.filter(
                Q(description__icontains=query)
                | Q(note__icontains=query)
                | Q(amount__icontains=query)
                | Q(cust_id__firstname__icontains=query)
                | Q(cust_id__email_id__icontains=query)
            ).distinct()
        return queryset_list


class IncomeTransactionUpdateRetriveDeleteView(RetrieveUpdateDestroyAPIView):
    """Handles update, retrive and delete of IncomeTransaction obj"""

    queryset = IncomeTransaction.objects.all()
    serializer_class = IncomeTransactionSerializer
    permission_classes = (IsAuthenticated, IncomeTransactionPermission)


class ExpenseTransactionListCreateView(ListCreateAPIView):
    """Handles List and Create of a ExpenseTransaction object"""

    serializer_class = ExpenseTransactionSerializer
    filter_backends = [SearchFilter, OrderingFilter, filters.DjangoFilterBackend]
    filterset_class = ExpenseTransactionFilter
    pagination_class = MyPageNumberPagination
    search_fields = [
        "description",
        "note",
        "amount",
        "sup_id__firstname",
        "sup_id__email_id",
    ]

    def get_queryset(self):
        """Returns only the objects related to current user"""
        user = self.request.user
        queryset_list = ExpenseTransaction.objects.filter(sup_id__ret=user).order_by(
            "-id"
        )
        queryset_list = self.filter_queryset(queryset_list)

        query = self.request.GET.get("q")
        if query:
            queryset_list = queryset_list.filter(
                Q(description__icontains=query)
                | Q(note__icontains=query)
                | Q(amount__icontains=query)
                | Q(sup_id__firstname__icontains=query)
                | Q(sup_id__email_id__icontains=query)
            ).distinct()
        return queryset_list


class ExpenseTransactionUpdateRetriveDeleteView(RetrieveUpdateDestroyAPIView):
    """Handles update, retrive and delete of ExpenseTransaction obj"""

    queryset = ExpenseTransaction.objects.all()
    serializer_class = ExpenseTransactionSerializer
    permission_classes = (IsAuthenticated, ExpenseTransactionPermission)
