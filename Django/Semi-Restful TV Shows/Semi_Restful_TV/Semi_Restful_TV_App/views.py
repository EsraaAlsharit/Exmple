from django.shortcuts import render, HttpResponse, redirect


def index(request):
    users = Users.objects.all()
    accounts = BankAccount.objects.all()
    context = {
        'users': users,
        'accounts': accounts
    }
    return render(request, 'index.html', context)


def AddShow(request):
    pass


def EditShow(request):
    pass


def Show(request):
    pass
