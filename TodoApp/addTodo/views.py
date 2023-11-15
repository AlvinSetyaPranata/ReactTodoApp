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

    if TodoModel.objects.filter(title=data["title"]).exists():
        return Response({"messege" : "Duplikasi data"}, status=status.HTTP_409_CONFLICT)

    serializer = AddTodoSerialize(data=data)

    print(data)

    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response({"messege" : "Data telah ditambahkan"}, status=status.HTTP_201_CREATED)
    

    return Response({"messege" : "Data tidak valid"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def editTodoView(req):
    data = req.data

    try:
        todo_obj = TodoModel.objects.get(title=data["title"])

        todo_obj.title = data["toUpdate"]["title"]
        todo_obj.place = data["toUpdate"]["place"]
        todo_obj.dates = data["toUpdate"]["dates"]

        todo_obj.save()

    except TodoModel.DoesNotExist:
        return Response({"messege" : f"Todo with name {data['title']} is not exists!"}, status=status.HTTP_404_NOT_FOUND)


    return Response({}, status=status.HTTP_200_OK)


@csrf_exempt
@ensure_csrf_cookie
def getCsrfTokenView(req):
    return JsonResponse({"csrfmiddlewaretoken": get_token(req)})