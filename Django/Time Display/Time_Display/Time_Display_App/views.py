from django.shortcuts import render, HttpResponse
from time import gmtime, strftime


def index(request):
    # return HttpResponse("this is the equivalent of @app.route('/')!")
    context = {
        "time": strftime("%b %d, %Y  %H:%M %p ", gmtime())
    }
    # print(context["time"])
    return render(request, 'index.html', context)
