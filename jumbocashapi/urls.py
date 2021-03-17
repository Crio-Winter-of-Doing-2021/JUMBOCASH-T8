from django.urls import path, include
from . import views
from rest_framework.authtoken.views import obtain_auth_token




urlpatterns = [
    path('', views.RetailerListCreateView.as_view()),
    path('<int:pk>/', views.RetailerUpdateRetriveDeleteView.as_view()),
    path('customers', views.CustomerListCreateView.as_view()),
    path('customers/<int:pk>', views.CustomerUpdateRetriveDeleteView.as_view()),
    path('suppliers', views.SupplierListCreateView.as_view()),
    path('suppliers/<int:pk>', views.SupplierUpdateRetriveDeleteView.as_view()),
    path('incometransactions', views.IncomeTransactionListCreateView.as_view()),
    path('incometransactions/<int:pk>', views.IncomeTransactionUpdateRetriveDeleteView.as_view()),
    path('expensetransactions', views.ExpenseTransactionListCreateView.as_view()),
    path('expensetransactions/<int:pk>/', views.ExpenseTransactionUpdateRetriveDeleteView.as_view()),

    path('login/', obtain_auth_token),
