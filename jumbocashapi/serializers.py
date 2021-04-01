from rest_framework import serializers
from jumbocashapi import models

class RetailerSerializer(serializers.ModelSerializer):
    """Serializes Retailer Object"""

    class Meta:
        model = models.Retailer
        fields = ['id', 'email', 'mobile_no','firstname', 'lastname', \
            'business_name', 'address', 'pincode', 'password']

        # make password field
        extra_kwargs = {
            'password' : {
                # make password write only
                'write_only' : True,
                # set input style password
                'style' : {'input_type' : 'password'}
            }
        }

    def create(self, validated_data):
        """Create and return a new retailer"""

        # calls the create_user function from RetailerManager
        retailer = models.Retailer.objects.create_user(
            **validated_data
        )

        return retailer

    def update(self, instance, validated_data):
        """Handle updating retailer"""
        print('user updated')
        if 'password' in validated_data:
            password = validated_data.pop('password')
            instance.set_password(password)

        return super().update(instance, validated_data) 


class CustomerSerializer(serializers.ModelSerializer):
    """Serializer for Customer """

    class Meta:
        model       = models.Customer
        fields      = ['id', 'firstname', 'lastname', 'mobile_no','ret']
        read_only_fields = ['ret']


class SupplierSerializer(serializers.ModelSerializer):
    """Serializer for Supplier """

    class Meta:
        model       = models.Supplier
        fields      = ['id', 'firstname', 'lastname', 'mobile_no', 'ret']
        read_only_fields = ['ret']

class IncomeTransactionSerializer(serializers.ModelSerializer):
    """Serializer for Customer """

    class Meta:
        model       = models.IncomeTransaction
        fields      = ['id','trans_date_time', 'amount', 'note', 'description', \
                       'payment_mode', 'payment_status', 'due_date', 'cust_id']  


class ExpenseTransactionSerializer(serializers.ModelSerializer):
    """Serializer for Customer """

    class Meta:
        model       = models.ExpenseTransaction
        fields      = ['id','trans_date_time', 'amount', 'note', 'description', \
                       'payment_mode', 'payment_status', 'due_date', 'sup_id']
           
    
   
 
       
        