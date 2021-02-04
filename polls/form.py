from .models import User
from django import forms


class PostForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('Username', 'Email', 'Descr',)

        widgets = {
            'Username': forms.TextInput(attrs={'class': 'form-control form-control-float-4', 'type': 'text'}),
            'Email': forms.TextInput(attrs={'class': 'form-control form-control-float-5', 'type': 'Email'}),
            'Descr': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Please add view for website'}),
        }
