import markdown
from django.db import models
from django.utils.text import slugify


class Post(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    body = models.TextField(help_text="Write in Markdown.")
    body_html = models.TextField(editable=False, blank=True)
    published = models.BooleanField(default=False)
    views = models.PositiveIntegerField(default=0, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        self.body_html = markdown.markdown(
            self.body,
            extensions=["extra", "codehilite", "toc"],
        )
        super().save(*args, **kwargs)
