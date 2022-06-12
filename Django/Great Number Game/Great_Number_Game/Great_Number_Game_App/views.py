from django.shortcuts import render, HttpResponse, redirect
import random
# import the random module
# theNum = random.randint(1, 100)
# random number between 1-100


def index(request):
    if 'theNum' in request.session:
        # request.session['theNum'] =random.randint(1, 100)
        pass
    else:
        request.session['theNum'] = random.randint(1, 100)
    rus = ""
    print(request.session['theNum'])
    # print(request.POST)
    if request.POST != {}:
        num = int(request.POST["num"])
        if num > request.session['theNum']:
            rus = "high"
            bg = "bg-danger"
        elif num < request.session['theNum']:
            rus = "low"
            bg = "bg-danger"
        else:
            rus = str(request.session['theNum'])+" was the number!"
            bg = "bg-success"
        print("your guess", num)

        context = {
            "num": rus,
            "bg": bg
        }
        return render(request, "index.html", context)
    else:
        return render(request, "index.html")


def reset(request):
    # newNum = random.randint(1, 100)
    # theNum = newNum
    del request.session['theNum']
    num = ""
    return redirect("/")
