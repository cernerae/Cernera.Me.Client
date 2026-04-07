from django.urls import path
from . import views

urlpatterns = [
    path("contact/", views.ContactMessageView.as_view(), name="contact"),
]