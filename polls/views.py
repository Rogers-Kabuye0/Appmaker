from django.shortcuts import render
from .models import Ema, User
from .form import PostForm
from .emai import PostyForm
# Create your views here.


def page(request):
    form = PostForm()

    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()



    context = {
        'formy': form,
    }
    return render(request, 'index.html', context)
