from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from Courses_App.models import *


def index(request):
    course = Course.objects.all()
    context = {
        "courses": course
    }
    return render(request, "index.html", context)


def comment(request, ID):
    course = Course.objects.get(id=ID)
    context = {
        "course": course
    }
    return render(request, "comment.html", context)


def addComment(request):
    errors = Comment.objects.validator(request.POST)
    ID = request.POST["id"]
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect(f"comment/{ID}")
    else:
        course = Course.objects.get(id=ID)
        comment = Comment.objects.create(comm=request.POST['comm'])
        comment.save()
        course.comm.add(comment)
        messages.success(request, "Course successfully Add")
        return redirect(f"comment/{ID}")


def AddCourse(request):
    errors = Course.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect("/")
    else:
        decse = Desc.objects.create(desc=request.POST['desc'])
        course = Course.objects.create(
            name=request.POST['name'],
            des=decse
        )
        course.save()
        messages.success(request, "Course successfully Add")
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
