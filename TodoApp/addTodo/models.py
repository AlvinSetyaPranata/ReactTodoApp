from django.db import models
# from django.utils.timezone import now

# Create your models here.
class TodoModel(models.Model):
    id = models.BigAutoField(unique=True, primary_key=True)
    title = models.CharField(verbose_name="title", max_length=255, default="Untitled", unique=True)
    dates = models.DateTimeField(verbose_name="date")
    place = models.CharField(verbose_name="place", default="Not specified", max_length=255)

    def __str__(self):
        return str(self.title)