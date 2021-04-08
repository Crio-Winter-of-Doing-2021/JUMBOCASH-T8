import django_filters as filters
from .models import IncomeTransaction, ExpenseTransaction


class IncomeTransactionFilter(filters.FilterSet):
    trans_date_gt = filters.DateTimeFilter(field_name="trans_date_time", lookup_expr='gt')
    trans_date_lt = filters.DateTimeFilter(field_name="trans_date_time", lookup_expr='lt')
    amount_gt     = filters.NumberFilter(field_name='amount', lookup_expr='gt')
    amount_lt     = filters.NumberFilter(field_name='amount', lookup_expr='lt')
    due_date_gt      = filters.DateFilter(field_name='due_date', lookup_expr='gt')
    due_date_lt      = filters.DateFilter(field_name='due_date', lookup_expr='lt')

    class Meta:
        model = IncomeTransaction
        fields = ['id','trans_date_time', 'amount', 'note', \
                       'payment_mode', 'payment_status', 'due_date', 'cust_id', 'tdate', 'tmonth', 'tyear']



class ExpenseTransactionFilter(filters.FilterSet):
    trans_date_gt = filters.DateTimeFilter(field_name="trans_date_time", lookup_expr='gt')
    trans_date_lt = filters.DateTimeFilter(field_name="trans_date_time", lookup_expr='lt')
    amount_gt     = filters.NumberFilter(field_name='amount', lookup_expr='gt')
    amount_lt     = filters.NumberFilter(field_name='amount', lookup_expr='lt')
    due_date_gt      = filters.DateFilter(field_name='due_date', lookup_expr='gt')
    due_date_lt      = filters.DateFilter(field_name='due_date', lookup_expr='lt')

    class Meta:
        model = ExpenseTransaction
        fields = ['id','trans_date_time', 'amount', 'note', \
                       'payment_mode', 'payment_status', 'due_date', 'sup_id', 'tdate', 'tmonth', 'tyear']