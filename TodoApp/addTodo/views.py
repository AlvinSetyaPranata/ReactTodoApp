from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie, csrf_protect

from rest_framework.decorators import api_view
from rest_framework.status import (
    HTTP_400_BAD_REQUEST
)

from .models import TodoModel
from .serializers import AddTodoSerialize

# Create your views here.
@api_view(["POST"])
def addTodoView(req):
    data = req.data

    serializer = AddTodoSerialize(data=data)

    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return JsonResponse({})

    return JsonResponse({})


    # model = TodoModel




@csrf_exempt
@ensure_csrf_cookie
def getCsrfTokenView(req):
    return JsonResponse({"csrfmiddlewaretoken": get_token(req)})