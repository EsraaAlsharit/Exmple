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


def anthorditaitl(request, ID):
    Authors = Author.objects.get(id=ID)
    books = Book.objects.all()
    context = {
        'authors': Authors,
        'books': books
    }
    return render(request, "details_author.html", context)


def bookditaitl(request, ID):
    authors = Author.objects.all()
    book = Book.objects.get(id=ID)
    context = {
        'authors': authors,
        'book': book
    }
    return render(request, "details_book.html", context)


def addBookTo(request):
    if request.method == 'POST':
        this_author = Author.objects.get(id=request.POST["AID"])
        this_author.books.add(Book.objects.get(id=request.POST["BID"]))
    return redirect("authors/{}".format(request.POST["AID"]))


def addAuthorTo(request):
    if request.method == 'POST':
        this_author = Author.objects.get(id=request.POST["AID"])
        this_author.books.add(Book.objects.get(id=request.POST["BID"]))
    return redirect("/{}".format(request.POST["BID"]))
