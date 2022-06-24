from django.shortcuts import render, HttpResponse


def index(request):
    return render(request, "index.html")


def result(request):
    print("Got Post Info....................")
    name_from_form = request.POST['name']
    # request._post[]
    loc_from_form = request.POST['loc']
    lang_from_form = request.POST['lang']
    gander_from_form = request.POST['gander']
    comm_from_form = request.POST['comm']

    online_from_form = ""
    onsite_from_form = ""
    if "onsite" in request.POST:
        onsite_from_form = request.POST['onsite']
    if "online" in request.POST:
        online_from_form = request.POST['online']

    print(name_from_form)
    print(loc_from_form)
    print(comm_from_form)
    print(lang_from_form)

    context = {
        "name": name_from_form,
        "location": loc_from_form,
        "language": lang_from_form,
        "gander": gander_from_form,
        "commit": comm_from_form,
        "work": [onsite_from_form, online_from_form]
    }
    return render(request, "result.html", context)
