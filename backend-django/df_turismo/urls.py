from django.contrib import admin
from django.urls import path, include
from turismo import views 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/turismo/', include('turismo.urls')),
    path('', views.api_root), 
]

