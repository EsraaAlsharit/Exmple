from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('shows', views.index),
    path('shows/new', views.AddShowTem),
    path('shows/create', views.AddShow),
    path('shows/<ID>/edit', views.EditShowTem),
    path('shows/<ID>/destroy', views.destroy),
    path('shows/edit', views.EditShow),
    path('shows/<ID>', views.show),
]
