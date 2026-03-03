from django.contrib import admin
from .models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ["title", "slug", "published", "views", "created_at", "updated_at"]
    list_filter = ["published"]
    search_fields = ["title", "body"]
    prepopulated_fields = {"slug": ("title",)}
    readonly_fields = ["body_html", "views", "created_at", "updated_at"]
    fieldsets = (
        (None, {
            "fields": ("title", "slug", "published"),
        }),
        ("Content", {
            "fields": ("body", "body_html"),
        }),
        ("Metadata", {
            "fields": ("views", "created_at", "updated_at"),
        }),
    )
