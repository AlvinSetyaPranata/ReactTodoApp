from django.http import JsonResponse
from addTodo.models import TodoModel
from rest_framework.decorators import api_view

# Create your views here.

@api_view(['POST'])
def deleteTodoView(req):


    return JsonResponse({})