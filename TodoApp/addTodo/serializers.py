from rest_framework.serializers import ModelSerializer
from .models import TodoModel


class AddTodoSerialize(ModelSerializer):
    class Meta:
        model = TodoModel
        fields = ['title', 'dates', 'place']