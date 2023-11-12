from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie, csrf_protect

from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

from .models import TodoModel
from .serializers import AddTodoSerialize

# Create your views here.
@api_view(["POST"])
def addTodoView(req):
    data = req.data

    # print(data)

    serializer = AddTodoSerialize(data=data)

    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response({"messege" : "Data telah ditambahkan"}, status=status.HTTP_201_CREATED)

    return Response({"messege" : "Data tidak valid"}, status=status.HTTP_400_BAD_REQUEST)



@csrf_exempt
@ensure_csrf_cookie
def getCsrfTokenView(req):
    return JsonResponse({"csrfmiddlewaretoken": get_token(req)})