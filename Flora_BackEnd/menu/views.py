from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Menu_Item, Category
from .serializers import Menu_ItemSerializer

# from .serializers import 
@api_view()
def menu_item_list(request):
    query_set = Menu_Item.objects.select_related('category').all()
    serializer = Menu_ItemSerializer(query_set, many=True)
    return Response(serializer.data)
# @api_view()
# def category_list(request, title):
#     query_set = Menu_Item.objects.select_related('collection').all()
#     serializer = Menu_ItemSerializer(category)
#     return Response(serializer.data)


@api_view()
def menu_item_id_search(requestm, id):
    menu_item = get_object_or_404(Menu_Item, pk=id)
    serializer = Menu_ItemSerializer(menu_item)
    return Response(serializer.data)
@api_view()
def menu_item_title_search(requestm, title):
    menu_item = get_object_or_404(Menu_Item, title=title)
    serializer = Menu_ItemSerializer(menu_item)
    return Response(serializer.data)

# Create your views here.
