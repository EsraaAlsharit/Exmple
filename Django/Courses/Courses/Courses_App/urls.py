from django.urls import path     
from . import views
urlpatterns = [
    path('', views.index),
    path('AddCourse', views.AddCourse),
    path('Course/destroy', views.destroy),
    path('Course/destroy/<ID>', views.Delete),
]
