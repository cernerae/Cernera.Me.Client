import logging
from django.conf import settings
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import ContactMessage
from .serializers import ContactMessageSerializer

logger = logging.getLogger(__name__)


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

        message = serializer.save(
            ip_address=_get_client_ip(request),
            user_agent=request.META.get("HTTP_USER_AGENT", ""),
            language=request.META.get("HTTP_ACCEPT_LANGUAGE", ""),
        )

        try:
            send_mail(
                subject=f"[Contact] {message.subject}",
                message=(
                    f"From: {message.name} <{message.email}>\n"
                    f"IP: {message.ip_address}\n\n"
                    f"{message.message}"
                ),
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.CONTACT_NOTIFICATION_EMAIL],
                fail_silently=False,
            )
        except Exception:
            logger.exception("Failed to send contact notification email")

        try:
            send_mail(
                subject="Thanks for reaching out to init1",
                message=(
                    f"Hi {message.name},\n\n"
                    "Thanks for contacting init1! We've received your message "
                    "and will review it and get back to you soon.\n\n"
                    "For your records, here's a copy of what you sent:\n\n"
                    f"Subject: {message.subject}\n"
                    f"{message.message}\n\n"
                    "— The init1 team"
                ),
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[message.email],
                fail_silently=False,
            )
        except Exception:
            logger.exception("Failed to send contact confirmation email")

        return Response({"detail": "Message received."}, status=status.HTTP_201_CREATED)