from rest_framework import viewsets
from .models import Profile, CarouselImage
from .serializers import ProfileSerializer, CarouselImageSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class CarouselImageViewSet(viewsets.ModelViewSet):
    queryset = CarouselImage.objects.all()
    serializer_class = CarouselImageSerializer
    
    def get_queryset(self):
        queryset = CarouselImage.objects.all()
        
        profile_id = self.request.query_params.get('profile_id', None)
        if profile_id is not None:
            queryset = queryset.filter(profile_id=profile_id)
            
        return queryset