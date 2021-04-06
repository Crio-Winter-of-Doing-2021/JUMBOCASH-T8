import django_filters
from .models import *

class IncometransFilter(django_filters.FilterSet):
    class Meta:
        model = IncomeTransaction
        fields = {
            'trans_date_time': ['lt', 'gt','exact'],
        }