from .models import Ema
from django import forms


class PostyForm(forms.ModelForm):
    class Meta:
        model = Ema
        fields = ('Emails',)

        widgets = {
            'Emails': forms.TextInput(attrs={'class': 'form-control', 'type': 'Email', 'placeholder': 'Email'}),
        }