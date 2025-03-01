from rest_framework import serializers
from .models import Profile, CarouselImage

class CarouselImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarouselImage
        fields = ['id', 'image', 'title', 'description', 'order']

class ProfileSerializer(serializers.ModelSerializer):
    carousel_images = CarouselImageSerializer(many=True, read_only=True)
    
    class Meta:
        model = Profile
        fields = ['id', 'name', 'alias', 'bio', 'created_at', 
                 'profile_image', 'banner_image', 'carousel_images']