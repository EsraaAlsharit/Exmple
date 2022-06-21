from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from Courses_App.models import *


def index(request):
    course = Course.objects.all()
    context = {
        "courses": course
    }
    return render(request, "index.html", context)


def AddCourse(request):
    errors = Course.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect("/")
    else:
        course = Course.objects.create(
            name=request.POST['name'],
            desc=request.POST['desc']
        )
        course.save()
        messages.success(request, "Show successfully Add")
        return redirect("/")


def Delete(request, ID):
    course = Course.objects.get(id=ID)
    context = {
        "course": course
    }
    return render(request, "delete.html", context)


def destroy(request):
    course = Course.objects.get(id=request.POST['ID'])
    course.delete()
    return redirect("/")
