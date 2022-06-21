from django.shortcuts import render, redirect
from django.contrib import messages
import bcrypt
from Login_Registration_App.models import User
from django.contrib import messages


def index(request):

    return render(request, 'index.html')


def login(request):
    if request.method == 'POST':
        error = User.objects.login_validator(request.POST)
        if len(error) > 0:
            for key, value in error.items():
                messages.error(request, value)
            return redirect('/')
        else:
            request.session['user_id'] = User.objects.get(
                email=request.POST['email']).fname
            return redirect('/success')


def register(request):
    if request.method == 'POST':
        errors = User.objects.register_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect("/")
        else:
            hash = bcrypt.hashpw(
                request.POST['pass'].encode(), bcrypt.gensalt()).decode()
            show = User.objects.create(
                fname=request.POST['fname'],
                lname=request.POST['lname'],
                email=request.POST['email'],
                password=hash
            )
            show.save()
            request.session['user_id'] = show.fname
            messages.success(request, "Show successfully Add")
            return redirect("/success")


def Success(request):
    return render(request, 'result.html')


def SignOut(request):
    del request.session['user_id']
    return redirect("/")
