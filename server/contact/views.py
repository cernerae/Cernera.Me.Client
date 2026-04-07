from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import ContactMessage
from .serializers import ContactMessageSerializer


def _get_client_ip(request):
    forwarded_for = request.META.get("HTTP_X_FORWARDED_FOR")
    if forwarded_for:
        return forwarded_for.split(",")[0].strip()
    return request.META.get("REMOTE_ADDR")


class ContactMessageView(APIView):
    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        serializer.save(
            ip_address=_get_client_ip(request),
            user_agent=request.META.get("HTTP_USER_AGENT", ""),
            language=request.META.get("HTTP_ACCEPT_LANGUAGE", ""),
        )
        return Response({"detail": "Message received."}, status=status.HTTP_201_CREATED)