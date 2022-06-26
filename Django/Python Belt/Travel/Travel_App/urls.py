from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('login', views.login),
    path('logout', views.logout),
    path('dashboard', views.dashboard),
    path('addTrip', views.addTrip),
    path('create', views.create),
    path('edit/<ID>', views.edit),
    path('remove/<ID>', views.remove),
    path('cancel/<ID>', views.cancel),
    path('join/<ID>', views.join),
    path('update', views.update),
    path('details/<ID>', views.detailsTrip)
]
