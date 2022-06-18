from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('authors', views.authors),
    path('addBook', views.addBook),
    path('addAuthor', views.addAuthor)
]
