from django.urls import path
from . import views

# URLConf
urlpatterns = [
    #path('product/', views.product_list)
    path('menu-item/', views.menu_item_list),
    path('menu-item/<int:id>/', views.menu_item_id_search),
    path('menu-item/<str:title>/', views.menu_item_title_search)
]