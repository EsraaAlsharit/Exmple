from django.shortcuts import render, HttpResponse, redirect


def index(request):
    if 'counter' in request.session:
        request.session['counter'] += 1
    else:
        request.session['counter'] = 1

    if 'visit' in request.session:
        request.session['visit'] += 1
    else:
        request.session['visit'] = 1

    return render(request, "index.html")


def destroy(request):
    del request.session['counter']
    return redirect("/")
    # return redirect("index")


def root(request):
    if 'counter' in request.session:
        request.session['counter'] += 2
    else:
        request.session['counter'] = 1

    if 'visit' in request.session:
        request.session['visit'] += 1
    else:
        request.session['visit'] = 1

    return render(request, "index.html")


def custom(request):
    request.session['counter'] = int(request.POST['num'])-1
    return redirect("/")
