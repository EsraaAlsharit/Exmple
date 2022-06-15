from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('AddNinja', views.AddNinja),
    path('AddDojo', views.AddDojo),
]
