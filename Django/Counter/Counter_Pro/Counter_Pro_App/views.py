from django.shortcuts import render, HttpResponse


def index(request):
    if 'key_name' in request.session:
        print('key exists!')
    else:
        print("key 'key_name' does NOT exist")

    return HttpResponse("this is the equivalent of @app.route('/')!")
