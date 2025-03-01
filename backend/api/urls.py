from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet, CarouselImageViewSet

router = DefaultRouter()
router.register(r'profiles', ProfileViewSet)
router.register(r'carousel-images', CarouselImageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]