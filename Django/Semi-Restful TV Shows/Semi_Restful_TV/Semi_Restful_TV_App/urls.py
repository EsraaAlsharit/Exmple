from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('new', views.AddShowtem),
    path('AddShow', views.AddShow),
    path('edit', views.EditShow),
    path('<ID>', views.Show),
]
