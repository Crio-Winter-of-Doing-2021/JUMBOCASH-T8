from rest_framework import permissions


class RetailerPermission(permissions.BasePermission):
    """Permissions for logged in users"""

    def has_object_permission(self, request, view, obj):
        """Checks user permission"""
        print(obj.id)
        print(request.user.id)
        return obj.id == request.user.id

class CustomerSupplierPermission(permissions.BasePermission):
    """Permission for customer and supplier objects"""

    def has_object_permission(self, request, view, obj):
        """Checks if the user has access to the obj"""
        return obj.ret == request.user

class IncomeTransactionPermission(permissions.BasePermission):
    """Permission for incometransactions"""

    def has_object_permission(self, request, view, obj):
        """Checks object permission for incometransactions"""

        #get the customer related to the transaction
        cust = obj.cust_id
        #get the user related to the customer
        ret = cust.ret
        return ret == request.user


class ExpenseTransactionPermission(permissions.BasePermission):
    """Permission for expensetransactions"""

    def has_object_permission(self, request, view, obj):
        """Checks object permission for expensetransactions"""

        #get the customer related to the transaction
        sup = obj.sup_id
        #get the user related to the customer
        ret = sup.ret
        return ret == request.user