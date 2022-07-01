from django.shortcuts import render, HttpResponse, redirect
from .models import *
from django.contrib import messages


def index(request):
    return render(request, "index.html")


def login(request):
    if request.method == 'POST':
        error = User.objects.login_validator(request.POST)
        if len(error) > 0:
            for key, value in error.items():
                messages.error(request, value)
            return redirect('/login')
        else:
            request.session['user_id'] = User.objects.get(
                email=request.POST['email']).id
            return redirect('/')
    return render(request, "login.html")


def register(request):
    if request.method == 'POST':
        errors = User.objects.register_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('/register')
        else:
            hash = bcrypt.hashpw(
                request.POST['pass'].encode(), bcrypt.gensalt()).decode()
            user = User.objects.create(
                fname=request.POST['fname'],
                lname=request.POST['lname'],
                birthday=request.POST['birthday'],
                email=request.POST['email'],
                password=hash
            )
            user.save()
            request.session['user_id'] = user.id
            messages.success(request, "User successfully Add")
            return redirect('/')
    return render(request, "register.html")


def SignOut(request):
    del request.session['user_id']
    return redirect('/')


def create(request):
    if not 'user_id' in request.session:
        return redirect('/')
    if request.method == 'POST':
        if request.method == 'POST' and 'submit' in request.POST:
            errors = User.objects.validator(request.POST)
            if len(errors) > 0:
                for key, value in errors.items():
                    messages.error(request, value)
                return redirect('/addUser')
            else:
                user = User.objects.get(id=request.session['user_id'])
                travel = User.objects.create(
                    dest=request.POST['dest'],
                    Sdate=request.POST['sdate'],
                    Edate=request.POST['edate'],
                    plan=request.POST['plan'],
                    user=user,
                )
                # travel.list.add(user)
                travel.save()
                messages.success(request, "User successfully Add")
                return redirect('/dashboard')
        return redirect('/')


def details(request, ID):
    return render(request, "details.html")


def profile(request):
    if not 'user_id' in request.session:
        return redirect('/')
    context = {
        "user": User.objects.get(id=request.session['user_id']),
    }
    return render(request, "profile.html", context)
