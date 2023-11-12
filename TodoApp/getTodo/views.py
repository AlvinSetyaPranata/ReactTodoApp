from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers
from addTodo.models import TodoModel

from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

# Create your views here.
@api_view(["GET"])
def getTodoView(req):
    data = [x["fields"] for x in serializers.serialize("python", TodoModel.objects.all())]

    if not data:
        return Response({}, status=status.HTTP_404_NOT_FOUND)

    return Response(data, status=status.HTTP_200_OK)