from django.shortcuts import render, HttpResponse, redirect
from Semi_Restful_TV_App.models import Show


def index(request):
    context = {
        'shows':  Show.objects.all()
    }
    return render(request, 'index.html', context)


def AddShowTem(request):
    return render(request, 'add_show.html')


def AddShow(request):
    print(request.POST['release_date'])
    show = Show.objects.create(title=request.POST['title'], network=request.POST['network'],
                               releaseDate=request.POST['release_date'], desc=request.POST['desc'])
    show.save()
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
    show = Show.objects.get(id=int(request.POST['id']))
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
