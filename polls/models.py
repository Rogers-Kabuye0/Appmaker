from django.db import models


# Create your models here.
class User(models.Model):
    Username = models.CharField(max_length=30, default='')
    Email = models.CharField(max_length=30, default='')
    Descr = models.TextField(default='')

    def __str__(self):
        return self.Username


class Ema(models.Model):
    Emails = models.CharField(max_length=30, default='')

    def __str__(self):
        return self.Emails
