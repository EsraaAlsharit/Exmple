from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from Travel_App.models import *


def index(request):
    return render(request, "index.html")


def register(request):
    if request.method == 'POST':
        errors = User.objects.register_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('/')
        else:
            hash = bcrypt.hashpw(
                request.POST['pass'].encode(), bcrypt.gensalt()).decode()
            user = User.objects.create(
                fname=request.POST['fname'],
                lname=request.POST['lname'],
                email=request.POST['email'],
                password=hash
            )
            user.save()
            request.session['user_id'] = user.id
            messages.success(request, "User successfully Add")
            return redirect('/dashboard')


def login(request):
    if request.method == 'POST':
        error = User.objects.login_validator(request.POST)
        if len(error) > 0:
            for key, value in error.items():
                messages.error(request, value)
            return redirect('/')
        else:
            request.session['user_id'] = User.objects.get(
                email=request.POST['email']).id
            return redirect('/dashboard')


def logout(request):
    del request.session['user_id']
    return redirect('/')


def dashboard(request):
    if not 'user_id' in request.session:
        return redirect('/')
    context = {
        "user": User.objects.get(id=request.session['user_id']),
        "trips": Trip.objects.all().order_by('-created_at')
        # "your_trips":Trip.objects.get()

    }
    return render(request, "dashboard.html", context)


def addTrip(request):
    if not 'user_id' in request.session:
        return redirect('/')
    context = {
        "user": User.objects.get(id=request.session['user_id']),
        "other_trips": Trip.objects.all()
        # "your_trips":Trip.objects.get()

    }
    return render(request, "addTrip.html", context)


def create(request):
    if not 'user_id' in request.session:
        return redirect('/')
    if request.method == 'POST':
        if request.method == 'POST' and 'submit' in request.POST:
            errors = Trip.objects.validator(request.POST)
            if len(errors) > 0:
                for key, value in errors.items():
                    messages.error(request, value)
                return redirect('/addTrip')
            else:
                user = User.objects.get(id=request.session['user_id'])
                travel = Trip.objects.create(
                    dest=request.POST['dest'],
                    Sdate=request.POST['sdate'],
                    Edate=request.POST['edate'],
                    plan=request.POST['plan'],
                    user=user,
                )
                # travel.list.add(user)
                travel.save()
                messages.success(request, "trip successfully Add")
                return redirect('/dashboard')
        if request.method == 'POST' and 'cancel' in request.POST:
            return redirect('/dashboard')


def edit(request, ID):
    if not 'user_id' in request.session:
        return redirect('/')
    trip = Trip.objects.get(id=ID)
    sdate = trip.Sdate.strftime("%Y-%m-%d")
    edate = trip.Edate.strftime("%Y-%m-%d")
    context = {
        "user": User.objects.get(id=request.session['user_id']),
        "trip": Trip.objects.get(id=ID),
        "sdate": sdate,
        "edate": edate
    }
    return render(request, "editTrip.html", context)


def remove(request, ID):
    if not 'user_id' in request.session:
        return redirect('/')
    trip = Trip.objects.get(id=ID)
    # remove if is who make it
    trip.delete()

    messages.success(request, "trip deleted successfully")
    return redirect('/dashboard')


def cancel(request, ID):
    if not 'user_id' in request.session:
        return redirect('/')
    trip = Trip.objects.get(id=ID)
    user = User.objects.get(id=request.session['user_id'])
    trip.list.remove(user)
    messages.success(request, "trip deleted successfully")
    return redirect('/dashboard')


def join(request, ID):
    if not 'user_id' in request.session:
        return redirect('/')
    user = User.objects.get(id=request.session['user_id'])
    travel = Trip.objects.get(id=ID)
    travel.list.add(user)
    travel.save()
    messages.success(request, "trip successfully join")
    return redirect('/dashboard')


def update(request):
    if not 'user_id' in request.session:
        return redirect('/')
    if request.method == 'POST':
        if request.method == 'POST' and 'update' in request.POST:
            errors = Trip.objects.validator(request.POST)
            ID = request.POST['ID']
            if len(errors) > 0:
                for key, value in errors.items():
                    messages.error(request, value)
                return redirect(f'/edit/{ID}')
            else:
                ID = request.POST['ID']
                travel = Trip.objects.get(id=ID)
                travel.dest = request.POST['dest']
                travel.Sdate = request.POST['sdate']
                travel.Edate = request.POST['edate']
                travel.plan = request.POST['plan']
                travel.save()
                messages.success(request, "trip successfully Updated")
                return redirect('/dashboard')
        if request.method == 'POST' and 'cancel' in request.POST:
            return redirect('/dashboard')


def detailsTrip(request, ID):
    if not 'user_id' in request.session:
        return redirect('/')
    context = {
        "user": User.objects.get(id=request.session['user_id']),
        "trip": Trip.objects.get(id=ID)
    }
    return render(request, "detailsTrip.html", context)
