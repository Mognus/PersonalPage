from django.db import models
from django.utils.text import slugify
import os

def profile_image_path(instance, filename):
    base, ext = os.path.splitext(filename)
    return f'profiles/{slugify(instance.alias)}/profile{ext}'

def banner_image_path(instance, filename):
    base, ext = os.path.splitext(filename)
    return f'profiles/{slugify(instance.alias)}/banner{ext}'

class Profile(models.Model):
    name = models.CharField(max_length=100)
    alias = models.CharField(max_length=100)
    bio = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    # Neue Bild-Felder
    profile_image = models.ImageField(upload_to=profile_image_path, blank=True, null=True)
    banner_image = models.ImageField(upload_to=banner_image_path, blank=True, null=True)
    
    def __str__(self):
        return self.alias

def carousel_image_path(instance, filename):
    # Generiere einen Dateinamen für Carousel-Bilder
    base, ext = os.path.splitext(filename)
    return f'profiles/{slugify(instance.profile.alias)}/carousel/{instance.order}{ext}'

class CarouselImage(models.Model):
    profile = models.ForeignKey(Profile, related_name='carousel_images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to=carousel_image_path)
    title = models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True)
    order = models.PositiveSmallIntegerField(default=0)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return f"{self.profile.alias} - Carousel {self.order}"