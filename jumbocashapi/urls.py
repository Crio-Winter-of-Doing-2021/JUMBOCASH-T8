from django.urls import path, include
from . import views
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [

    # Retailer Urls
    path('retailers/profile/', views.RetailerListView.as_view()),
    path('retailers/<int:pk>', views.RetailerUpdateRetriveDeleteView.as_view()),

    # Customer Urls
    path('customers', views.CustomerListCreateView.as_view()),
    path('customers/<int:pk>', views.CustomerUpdateRetriveDeleteView.as_view()),
    
    # Supplier Urls
    path('suppliers', views.SupplierListCreateView.as_view()),
    path('suppliers/<int:pk>', views.SupplierUpdateRetriveDeleteView.as_view()),
    
    # Transaction Urls
    path('incometransactions', views.IncomeTransactionListCreateView.as_view()),
    path('incometransactions/<int:pk>', views.IncomeTransactionUpdateRetriveDeleteView.as_view()),
    path('expensetransactions', views.ExpenseTransactionListCreateView.as_view()),
    path('expensetransactions/<int:pk>/', views.ExpenseTransactionUpdateRetriveDeleteView.as_view()),

    # Auth Urls
    path('register', views.RetailerCreateView.as_view()),
    path('login/', obtain_auth_token)

]
