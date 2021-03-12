from django.contrib import admin
from . models import Retailer, Customer, Supplier, IncomeTransaction, ExpenseTransaction

# Register your models here.
admin.site.register(Retailer)
admin.site.register(Customer)
admin.site.register(Supplier)
admin.site.register(IncomeTransaction)
admin.site.register(ExpenseTransaction)
