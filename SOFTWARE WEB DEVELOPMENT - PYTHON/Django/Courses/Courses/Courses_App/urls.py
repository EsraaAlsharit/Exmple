from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('AddCourse', views.AddCourse),
    path('Course/destroy', views.destroy),
    path('AddComment', views.addComment),
    path('comment/<ID>', views.comment),
    path('Course/destroy/<ID>', views.Delete),
]
