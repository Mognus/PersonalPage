from django.contrib import admin
from .models import Profile, CarouselImage

class CarouselImageInline(admin.TabularInline):
    model = CarouselImage
    extra = 1

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'alias', 'created_at')
    inlines = [CarouselImageInline]

@admin.register(CarouselImage)
class CarouselImageAdmin(admin.ModelAdmin):
    list_display = ('profile', 'title', 'order')
    list_filter = ('profile',)