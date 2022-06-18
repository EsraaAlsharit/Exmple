from django.shortcuts import render, HttpResponse, redirect
from books_authors_app.models import *


def index(request):
    Books = Book.objects.all()
    context = {
        'books': Books
    }
    return render(request, 'books.html', context)


def authors(request):
    Authors = Author.objects.all()
    context = {
        'authors': Authors
    }
    return render(request, 'authors.html', context)


def addAuthor(request):
    if request.method == 'POST':
        this_author = Author.objects.create(
            fname=request.POST["fname"],
            lname=request.POST["lname"],
            notes=request.POST["note"]
        )
        this_author.save()
    return redirect("/authors")


def addBook(request):
    if request.method == 'POST':
        this_book = Book.objects.create(
            title=request.POST["title"],
            desc=request.POST["desc"])
        this_book.save()
    return redirect("/")
