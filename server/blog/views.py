from django.db.models import F
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Post
from .serializers import PostListSerializer, PostDetailSerializer


class PostListView(generics.ListAPIView):
    queryset = Post.objects.filter(published=True)
    serializer_class = PostListSerializer


class PostDetailView(generics.RetrieveAPIView):
    queryset = Post.objects.filter(published=True)
    serializer_class = PostDetailSerializer
    lookup_field = "slug"


class PostIncrementViewsView(APIView):
    def post(self, request, slug):
        updated = Post.objects.filter(published=True, slug=slug).update(
            views=F("views") + 1
        )
        if not updated:
            return Response({"detail": "Not found."}, status=404)
        views = Post.objects.values_list("views", flat=True).get(slug=slug)
        return Response({"views": views})
