from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('success', views.Success),
    path('register', views.register),
    path('login', views.login),
    path('SignOut', views.SignOut),

]
