# Install Django
if you don't have python 
1. [Python](https://www.python.org/downloads/)
make pip in env path

2. [Django](https://www.djangoproject.com/download/)

```md
pip install Django==4.1.1
````
# Creating a Django Project

### Objectives:

- Practice the steps for creating a Django project with a single app
- Familiarize ourselves with the role of each file
<hr>

So we've talked about modularization and MTV (and MVC), but what does that really mean? Let's go ahead and build a Django project, and then we'll review the folder structure to really see what modularization is all about.

Remember that a single application in Django (in our case, every assignment) is called a project, which contains one or more apps.

1. With our Django virtual environment activated, create a new Django project. First navigate to where you want the project to be saved (for these first few assignments, that will be the python_stack/django/django_intro folder). Then run this command, specifying a project name of our choosing:

```md
cd python_stack/django/django_intro
django_intro> django-admin startproject your_project_name_here
```

- Let's test this out:

Navigate into the folder that was just created. A new Django project has just been created--let's run it!

```md
django_intro> cd your_project_name_here
your_project_name_here> python manage.py runserver
```

Open `localhost:8000` in a browser window. Hooray for CLIs (command-line interfaces)!

(Don't worry about the warning about unapplied migrations. It won't affect us for now, and we'll address it soon enough.)

Press `ctrl-c` to stop the server. Open up the project folder in your text editor. (Take note of the folder structure so far!) We'll be updating some of these files shortly.

2. For every app we want to add to our project, we'll do the following:

```md
your_project_name_here> python manage.py startapp your_app_name_here
```

**The apps in a project CANNOT have the same name as the project.**

In the text editor, find the settings.py file. It should be in a folder with the same name as our project. Find the variable INSTALLED_APPS, and let's add our newly created app:

### your_project_name_here/your_project_name_here/settings.py

```md
INSTALLED_APPS = [
'your_app_name_here', # added this line. Don't forget the comma!!
'django.contrib.admin',
'django.contrib.auth',
'django.contrib.contenttypes',
'django.contrib.sessions',
'django.contrib.messages',
'django.contrib.staticfiles',
] # the trailing comma after the last item in a list, tuple, or dictionary is commonly accepted in Python
```

3. For these next few steps, we are creating the route "/" to be associated with a specific function. Trust for now--we'll break this down in greater detail in the next tab. In the urls.py file, add a URL pattern for your new app. (You can delete the current admin pattern, or just ignore it for now). You will need to add an import for your views file.

### your_project_name_here/your_project_name_here/urls.py

```md
from django.urls import path, include # import include

# from django.contrib import admin # comment out, or just delete

urlpatterns = [
path('', include('your_app_name_here.urls')),
 # path('admin/', admin.sites.urls) # comment out, or just delete
]
```

4. Next, let's create a new urls.py file in the your_app_name_here folder. Put the following code

```md
your_project_name_here/your_app_name_here/urls.py
from django.urls import path  
from . import views
urlpatterns = [
path('', views.index),
]
```

And then actually put a function called index in our app's views.py file:

### your_project_name_here/your_app_name_here/views.py

```md
from django.shortcuts import render, HttpResponse
def index(request):
return HttpResponse("this is the equivalent of @app.route('/')!")
```

Let's run our app again and check it out at `localhost:8000/`. Whew. We've done it!

```md
your_project_name_here> python manage.py runservercopy
```

**Note: Do not manually change the name of any of your folders after creation!**

For a quick summary/visual overview, here's the structure we should have after all these steps, inside the project folder.

![](project-structure.png)

# Django Routing
### Objectives:
- Understand how routes are divided between project and app level urls.py files
- Understand how requests are resolved from the urls.py files to the views.py file
<hr>

We have a new Django project running, but what was all that code we added there at the end? 

**project_name/project_name/urls.py**
```md
from django.urls import path, include
    
urlpatterns = [
    path('', include('app_name.urls')),
]
````
The `urlpatterns` is simply a variable that holds a list of urls that this project recognizes. Notice there are 2 arguments being passed to the url function:

a raw string representing a route pattern (in our example: `''`)
what to do if the pattern matches (in our example: `include('app_name.urls'))`
The second argument, `include('app_name.urls')` will resolve the rest of the route. So let's go there:

**project_name/app_name/urls.py**
```md
from django.urls import path
from . import views	# the . indicates that the views file can be found in the same directory as this file
                    
urlpatterns = [
    path('', views.index),
]
````
This is the same url function, but this time our arguments indicate that:

1. `''` - the rest of the route both starts and ends with nothing (i.e. "/" is the full route), and
2. `views.index` - if the requested route matches this pattern, then the function with the name "index" from this app's views.py file will be invoked.

If the route wants a views.index function, then we'd better have one:

**project_name/app_name/views.py**
```md
from django.shortcuts import render, HttpResponse
def index(request):
    return HttpResponse("response from index method from root route, localhost:8000!")
````
A couple of important things to notice here:

1. Every function's first argument will be the request object.
2. We don't distinguish in our routes anywhere between GET vs POST requests. This will be done within a given function.
3. If we are returning a string, we cannot simply return a string, but must send the string via HttpResponse (which must be imported. We'll be returning rendered templates again soon enough!)

Here's a visual of how routes get resolved in a Django project:
![](django_routing.png)

Routing with Parameters
Objectives:
Learn how to capture variables from the url
In this module, we will look into how Django interprets a request with varying values.

Learn more from the [documentation](https://docs.djangoproject.com/en/2.2/topics/http/urls/#how-django-processes-a-request).

Here are a few examples, to demonstrate the syntax:

**some_project/some_app/urls.py**
```md
urlpatterns = [
        path('bears', views.one_method),                        # would only match localhost:8000/bears
        path('bears/<int:my_val>', views.another_method),       # would match localhost:8000/bears/23
        path('bears/<str:name>/poke', views.yet_another),       # would match localhost:8000/bears/pooh/poke
    	path('<int:id>/<str:color>', views.one_more),           # would match localhost:8000/17/brown
]
````
The corresponding functions would then look like this:

**some_project/some_app/views.py**
```md
def one_method(request):                # no values passed via URL
    pass                                
    
def another_method(request, my_val):	# my_val would be a number from the URL
    pass                                # given the example above, my_val would be 23
    
def yet_another(request, name):	        # name would be a string from the URL
    pass                                # given the example above, name would be 'pooh'
    
def one_more(request, id, color): 	# id would be a number, and color a string from the URL
    pass                                # given the example above, id would be 17 and color would be 'brown'
````


- **CharField**

    Any text that a user may enter. This has one required parameter, max_length, that is the maximum length of text that can be saved.
- **TextField**

    Like a CharField, but with no maximum length. Your user could copy the entire text of the Harry Potter series into the field and it would save in the database correctly.
- **IntegerField**

    Holds an integer value
- **FloatField**

    Holds a float value; this is good for numbers with potentially varying numbers of decimal places
- **DecimalField**

    This is a good field for a number with a fixed number of decimal places, like currency. There are 2 required parameters: max_digits refers to the total number of digits (before and after the decimal place), and decimal_places refers to how many decimal places.
- **BooleanField**

    Holds a boolean value
- **DateTimeField**

    Used for a combination of a specific date and time. This field can take two very useful optional parameters. Setting the auto_now_add argument to True adds the current date/time when an object is created. Setting auto_now=True automatically updates any time the object is modified.

```md
  python manage.py makemigrations
  python manage.py migrate
````

To use the shell, we'll run the following command in our terminal from our project's root directory (where our manage.py file is located):

```md
python manage.py shell
````