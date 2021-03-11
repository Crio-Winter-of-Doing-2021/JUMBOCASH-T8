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
            email           = validated_data['email'],
            mobile_no       = validated_data['mobile_no'],
            firstname       = validated_data['firstname'],
            lastname        = validated_data['lastname'],
            business_name   = validated_data['business_name'],
            address         = validated_data['address'],
            pincode         = validated_data['pincode'],
            password        = validated_data['password']