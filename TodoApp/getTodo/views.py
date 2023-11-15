from django.shortcuts import render
from django.core import serializers
from addTodo.models import TodoModel

from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view


# Create your views here.
@api_view(["GET"])
def getTodoView(req):
    data = [x["fields"] for x in serializers.serialize("python", TodoModel.objects.all())]

    return Response(data, status=status.HTTP_200_OK)


def renderTodoView(req):
    return render(req, "index.html")