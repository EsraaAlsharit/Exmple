from django.shortcuts import render, HttpResponse, redirect
from Users_app.models import *


def index(request):
    all = Users.objects.all()
    context = {
        "users": all
    }
    return render(request, "index.html", context)


def new(request):
    allusers = Users.objects.create(
        fname=request.POST['fname'],
        lname=request.POST['lname'],
        email=request.POST['email'],
        age=request.POST['age']
    )
    allusers.save()
    return redirect("/")
