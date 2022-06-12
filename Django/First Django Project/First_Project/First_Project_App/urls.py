from django.urls import path
from . import views

urlpatterns = [
    path('', views.root),
    path('blogs', views.index),
    path('blogs/new', views.new),
    path('blogs/create', views.create),
    path('blogs/<int:my_val>', views.show),
    path('blogs/<int:number>/edit', views.edit),
    path('blogs/<int:num>/delete', views.destroy),
    path('blogs/json', views.Bonus),
]
