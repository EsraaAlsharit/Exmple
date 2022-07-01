from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('create', views.create),
    path('login', views.login),
    path('SignOut', views.SignOut),
    path('profile', views.profile),
    path('<ID>', views.details),


]
