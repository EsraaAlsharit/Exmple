from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse


def root(request):
    return redirect("blogs")


def index(request):
    return HttpResponse("placeholder to later display a list of all blogs")


def new(request):
    return HttpResponse("placeholder to display a new form to create a new blog")


def create(request):
    return redirect("/")


def show(request, my_val):
    return HttpResponse("placeholder to display blog number: {}".format(my_val))


def edit(request, number):
    return HttpResponse("placeholder to edit blog {}".format(number))


def destroy(request, num):
    return redirect("../../blogs")


def Bonus(request):
    key = {
        'title': "My first blog",
        'content': "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    }

    return HttpResponse(JsonResponse(key))
