from django.shortcuts import render, HttpResponse, redirect
from Dojo_Ninjas_App.models import *


def index(request):
    dojos = Dojos.objects.all()
    ninjas = Ninja.objects.all()
    context = {
        'Dojos': dojos,
        'Ninjas': ninjas
    }
    return render(request, 'index.html', context)


def AddDojo(request):
    if request.method == 'POST':
        dojo = Dojos.objects.create(
            name=request.POST['Name'],
            city=request.POST['City'],
            state=request.POST['State']
        )
        dojo.save()
    return redirect("/")


def DelDojo(request, ID):
    Dojo = Dojos.objects.get(id=ID)
    Dojo.delete()
    return redirect("/")


def AddNinja(request):
    if request.method == 'POST':
        ninja = Ninja.objects.create(
            fname=request.POST['fname'],
            lname=request.POST['lname'],
            dojo=Dojos.objects.get(id=request.POST['dojo']),
        )
        ninja.save()
    return redirect("/")
