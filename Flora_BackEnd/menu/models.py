from django.db import models
from django.core.validators import MinValueValidator
# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=80)
    picture = models.ImageField(null=True, blank=True)
    def __str__(self) -> str:
       return self.title
    class Meta:
       ordering = ['id']

class Menu_Item(models.Model):
    order_id = models.IntegerField(default=0)
    title = models.CharField(max_length=80)
    description = models.TextField(null=True, blank=True)
    price = models.CharField(max_length=80)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, blank=True, null=True)
    picture = models.ImageField(null=True, blank=True)



