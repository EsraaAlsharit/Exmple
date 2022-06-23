from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *


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
                email=request.POST['email']).id
            return redirect('/addBook')


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
            show = User.objects.create(
                fname=request.POST['fname'],
                lname=request.POST['lname'],
                email=request.POST['email'],
                password=hash
            )
            show.save()
            request.session['user_id'] = show.id
            messages.success(request, "Show successfully Add")
            return redirect('/addBook')


def dashBoard(request):
    if not 'user_id' in request.session:
        return redirect('/')
    return render(request, 'result.html')


def logout(request):
    del request.session['user_id']
    return redirect('/')


def addBook(request):
    if not 'user_id' in request.session:
        return redirect('/')
    if request.method == 'POST':
        errors = Book.objects.validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('/addBook')
        else:
            title = request.POST['title']
            desc = request.POST['desc']
            user = User.objects.get(id=request.session['user_id'])
            newBook = Book.objects.create(title=title, desc=desc, user=user)
            newBook.Favorite_by.add(user)
            newBook.save()
            return redirect('/addBook')
    books = Book.objects.all()
    user = User.objects.get(id=request.session['user_id'])
    context = {
        "books": books,
        "user": user
    }
    return render(request, "add_book.html", context)


def edit(request):
    if request.method == 'POST' and 'add' in request.POST:
        ID = request.POST['id']
        errors = Book.objects.validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect(f'/detailBook/{ID}')
        else:
            title = request.POST['title']
            desc = request.POST['desc']
            book = Book.objects.get(id=ID)
            book.title = title
            book.desc = desc
            book.save()
            return redirect(f'/detailBook/{ID}')
    if request.method == 'POST' and 'delete' in request.POST:
        ID = request.POST['id']
        book = Book.objects.get(id=ID)
        book.delete()
        return redirect('/addBook')


def detailBook(request, ID):
    book = Book.objects.get(id=ID)
    user = User.objects.get(id=request.session['user_id'])
    context = {
        "book": book,
        "user": user
    }
    return render(request, "detailBook.html", context)


def unFavorite(request, ID):
    book = Book.objects.get(id=ID)
    user = User.objects.get(id=request.session['user_id'])
    user.Favorite.remove(book)
    # book.users_who_like.add(user)
    return redirect(f'/detailBook/{ID}')


def addFavorite(request, ID):
    book = Book.objects.get(id=ID)
    user = User.objects.get(id=request.session['user_id'])
    user.Favorite.add(book)
    # book.users_who_like.add(user)
    return redirect(f'/detailBook/{ID}')
