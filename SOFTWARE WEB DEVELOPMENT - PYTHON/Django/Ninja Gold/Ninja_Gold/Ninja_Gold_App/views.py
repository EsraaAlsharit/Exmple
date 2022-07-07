from django.shortcuts import render, redirect
import random
# random.randint(1, 100) 		# random number between 1-100


def index(request):

    # print(len(log))
    if 'gold' in request.session:
        pass
    else:
        request.session['gold'] = 0

    if 'log' in request.session:
        pass
    else:
        request.session['log'] = []
        # request.session['color'] = ""
    # print(request.POST)
    if request.POST != {}:
        if request.POST["form"] == "farm" or request.POST["form"] == "cave" or request.POST["form"] == "house":
            num = random.randint(10, 20)
            request.session['log'].append(
                f"You entered a {request.POST['form']} and earned {num} gold.")
            # request.session['color'].append("text-success")
            request.session["gold"] += num
        # elif request.POST["form"] == "quest":
        else:
            num = random.randint(-50, 50)
            if num > -1:
                request.session['log'].append(
                    f"You entered a {request.POST['form']} and earned {num} gold.")
            else:
                request.session['log'].append(
                    f"You failed a {request.POST['form']} and lost  {num} gold. Ouch.")
            # request.session['color'].append("text-danger")
            request.session["gold"] += num

    context = {
        "log":  request.session['log']
        # "color": request.session['color']
    }
    return render(request, "index.html")


def destroy(request):
    del request.session['color']
    del request.session['log']
    del request.session['gold']
    request.POST = {}
    return redirect("/")
