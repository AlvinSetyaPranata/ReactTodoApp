"""
URL configuration for TodoApp project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
from django.urls import path, re_path
from getTodo.views import getTodoView, renderTodoView
from addTodo.views import (addTodoView, getCsrfTokenView, editTodoView)
from deleteTodo.views import deleteTodoView
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from .settings import DEBUG

urlpatterns = [
    path("api/get/", getTodoView),
    path("api/edit/", editTodoView),
    path("api/add/", addTodoView),
    path("api/delete/", deleteTodoView),
    path("api/getCsrf/", getCsrfTokenView),
    path('admin/', admin.site.urls),
    path('', renderTodoView),
]


# if DEBUG:
#     urlpatterns += staticfiles_urlpatterns()