# from django.db.models.query import QuerySet
# from django.db.models import Count
from django.contrib import admin
# from django.http import HttpRequest
# from django.utils.html import format_html, urlencode
# from django.urls import reverse
# from typing import Any
from . import models

@admin.register(models.Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'title']


@admin.register(models.Menu_Item)
class Menu_ItemAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'price']
    # list_select_related = ['category']
    # def category_title(self, menu_item):
    #     return menu_item.category.title
