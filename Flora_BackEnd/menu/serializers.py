from rest_framework import serializers
from decimal import Decimal
from .models import Menu_Item, Category

class CategorySerializer(serializers.ModelSerializer):
    # id = serializers.IntegerField() 
    # title = serializers.CharField(max_length=80)
    class Meta:
        model = Category
        fields = ['id', 'title']
class Menu_ItemSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.CharField(max_length=80)
    price = serializers.CharField(max_length=80)
    category = CategorySerializer()
    picture = serializers.ImageField()