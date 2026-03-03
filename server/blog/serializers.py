from rest_framework import serializers
from .models import Post


class PostListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["id", "title", "slug", "views", "created_at", "updated_at"]


class PostDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["id", "title", "slug", "body_html", "views", "created_at", "updated_at"]
