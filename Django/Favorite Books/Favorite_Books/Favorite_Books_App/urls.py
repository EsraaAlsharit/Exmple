from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('DashBoard', views.dashBoard),
    path('register', views.register),
    path('login', views.login),
    path('logout', views.logout),
    path('addBook', views.addBook),
    path('edit', views.edit),
    path('unFavorite/<ID>', views.unFavorite),
    path('addFavorite/<ID>', views.addFavorite),
    path('detailBook/<ID>', views.detailBook),
]
