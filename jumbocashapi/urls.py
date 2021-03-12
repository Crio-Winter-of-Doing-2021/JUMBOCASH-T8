from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.RetailerListCreateView.as_view()),
    path('<int:pk>/', views.RetailerUpdateRetriveDeleteView.as_view()),
] 