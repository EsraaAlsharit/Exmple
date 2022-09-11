# Install Django
if you don't have python 
1. [Python](https://www.python.org/downloads/)
make pip in env path

2. [Django](https://www.djangoproject.com/download/)

```md
pip install Django==4.1.1
````
# Building Django Project 
make project
```md
django-admin startproject your_project_name_here
````
make app inside project
```md
cd your_project_name_here
python manage.py startapp App_Name
````

your_project_name_here/your_project_name_here/settings.py
```md
   INSTALLED_APPS = [
       'your_app_name_here', # added this line. Don't forget the comma!!
       'django.contrib.admin',
       'django.contrib.auth',
       'django.contrib.contenttypes',
       'django.contrib.sessions',
       'django.contrib.messages',
       'django.contrib.staticfiles',
   ]    
````

your_project_name_here/your_project_name_here/urls.py
```md
from django.urls import path, include           # import include
# from django.contrib import admin              # comment out, or just delete
urlpatterns = [
    path('', include('your_app_name_here.urls')),	   
    # path('admin/', admin.sites.urls)         # comment out, or just delete
]
````

your_project_name_here/your_app_name_here/urls.py
```md
from django.urls import path     
from . import views
urlpatterns = [
    path('', views.index),	   
]
````

your_project_name_here/your_app_name_here/views.py
```md
from django.shortcuts import render, HttpResponse
def index(request):
    return HttpResponse("this is the equivalent of @app.route('/')!")
````

# Run 

```md
python manage.py runserver
````
open in `localhost:8000/`


# make DB

in file `models.py` put 
```md
from django.db import models
    
class Movie(models.Model):
    title = models.CharField(max_length=45)
    description = models.TextField()
    release_date = models.DateTimeField()
    duration = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
````

to Build the DB use `makemigrations` cmd
`migrate` is for using Session in Django

```md
  python manage.py makemigrations
  python manage.py migrate
````

but u need after making `makemigrations` to do `migrate` cmd because is is overwrites 



To use the shell, we'll run the following command in our terminal from our project's root directory (where our manage.py file is located):

```md
python manage.py shell
````

full project 
[Favorite Books](https://github.com/EsraaAlsharit/SDA_SoftwareDev/tree/main/SOFTWARE%20WEB%20DEVELOPMENT%20-%20PYTHON/Django/Favorite%20Books)