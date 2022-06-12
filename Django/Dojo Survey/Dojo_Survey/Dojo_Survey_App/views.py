from django.shortcuts import render, HttpResponse


def index(request):
    return render(request, "index.html")


def result(request):
    print("Got Post Info....................")
    name_from_form = request.POST['name']
    # request._post[]
    loc_from_form = request.POST['loc']
    lang_from_form = request.POST['lang']
    comm_from_form = request.POST['comm']

    print(name_from_form)
    print(loc_from_form)
    print(comm_from_form)
    print(lang_from_form)
    
    context = {
        "name": name_from_form,
        "location": loc_from_form,
        "language": lang_from_form,
        "commit": comm_from_form
    }
    return render(request, "result.html", context)
