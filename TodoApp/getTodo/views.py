from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers
from addTodo.models import TodoModel

# Create your views here.
def getTodoView(req):
    data = [x["fields"] for x in serializers.serialize("python", TodoModel.objects.all())]

    return JsonResponse(data, safe=False)
