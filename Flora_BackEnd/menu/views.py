from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Menu_Item, Category
from .serializers import Menu_ItemSerializer, CategorySerializer

# from .serializers import 
@api_view()
def menu_item_list(request):
    query_set = Menu_Item.objects.select_related('category').all()
    serializer = Menu_ItemSerializer(query_set, many=True)
    return Response(serializer.data)
@api_view()
def menu_item_id_search(request, id):
    menu_item = get_object_or_404(Menu_Item, pk=id)
    serializer = Menu_ItemSerializer(menu_item)
    return Response(serializer.data)
@api_view()
def menu_item_title_search(request, title):
    menu_item = get_object_or_404(Menu_Item, title=title)
    serializer = Menu_ItemSerializer(menu_item)
    return Response(serializer.data)



@api_view()
def category_list(request):
    query_set = Category.objects.all()
    serializer = CategorySerializer(query_set, many=True)
    return Response(serializer.data)
@api_view()
def category_id_search(request, id):
    category = get_object_or_404(Category, pk=id)
    serializer = CategorySerializer(category)
    return Response(serializer.data)
@api_view()
def category_title_search(request, title):
    category = get_object_or_404(Category, title=title)
    serializer = CategorySerializer(category)
    return Response(serializer.data)

# Create your views here.
