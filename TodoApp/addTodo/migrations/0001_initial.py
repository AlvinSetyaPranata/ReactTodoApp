# Generated by Django 4.2.2 on 2023-10-23 12:43

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False, unique=True)),
                ('title', models.CharField(default='Untitled', max_length=255, verbose_name='title')),
                ('dates', models.DateTimeField(default=datetime.datetime(2023, 10, 23, 12, 43, 34, 337716), verbose_name='date')),
                ('place', models.CharField(default='Not specified', max_length=255, verbose_name='place')),
            ],
        ),
    ]
