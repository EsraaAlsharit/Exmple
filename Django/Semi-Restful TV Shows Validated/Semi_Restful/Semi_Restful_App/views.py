from django.shortcuts import render, redirect
from django.contrib import messages
from Semi_Restful_App.models import Show

def index(request):
    context = {
        'shows':  Show.objects.all()
    }
    return render(request, 'index.html', context)

def AddShowTem(request):
    return render(request, 'add_show.html')

def AddShow(request):
    # if request.method == 'POST':
    errors = Show.objects.basic_validator(request.POST)
    if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
        for key, value in errors.items():
            messages.error(request, value)
        # redirect the user back to the form to fix the errors
        return redirect("../shows/create")
    else:
        show = Show.objects.create(
            title=request.POST['title'],
            network=request.POST['network'],
            releaseDate=request.POST['release_date'],
            desc=request.POST['desc']
        )
        show.save()
        messages.success(request, "Show successfully updated")
        return redirect("../shows/{}".format(show.id))


def EditShowTem(request, ID):
    show = Show.objects.get(id=ID)
    date = show.releaseDate.strftime("%m-%d-%Y")
    print(date)
    context = {
        'show': show,
        'date': date
    }
    return render(request, 'edit_show.html', context)


def EditShow(request):
    errors = Show.objects.basic_validator(request.POST)
    show = Show.objects.get(id=int(request.POST['id']))
    if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
        for key, value in errors.items():
            messages.error(request, value)
        # redirect the user back to the form to fix the errors
        return redirect("../shows/{}/edit".format(show.id))
    else:
        show.title = request.POST['title']
        show.network = request.POST['network']
        show.releaseDate = request.POST['release_date']
        show.desc = request.POST['desc']
        show.save()
        return redirect("../shows/{}".format(show.id))


def destroy(request, ID):
    show = Show.objects.get(id=ID)
    show.delete()
    return redirect("/shows")


def show(request, ID):
    show = Show.objects.get(id=ID)

    context = {
        'show': show
    }
    return render(request, 'details_show.html', context)
