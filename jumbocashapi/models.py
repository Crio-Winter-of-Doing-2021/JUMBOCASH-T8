from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.models import BaseUserManager


class RetailerManager(BaseUserManager):
    """Manager for Retailer"""

    def create_user(self, email, password, **kwargs):
        """Create a new retailer profile"""
        if not email:
            raise ValueError('User must have an email id')
        
        #makes email to lowercase 
        email = self.normalize_email(email)
        user = self.model(email=email, **kwargs)
        
        # hashing the password
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, password, **kwargs):
        """Create and save a superuser"""
        user = self.create_user(email, password, **kwargs)

        user.is_superuser = True
        user.is_staff     = True
        user.save()

        return user

class Retailer(AbstractBaseUser, PermissionsMixin):
    """ Model for Retailer users """
    email           = models.EmailField(max_length=255, unique=True)
    mobile_no       = models.CharField(max_length=10, unique=True)
    firstname       = models.CharField(max_length=255)
    lastname        = models.CharField(max_length=255)
    business_name   = models.CharField(max_length=255)
    address         = models.CharField(max_length=255)
    pincode         = models.CharField(max_length=6)

    is_staff        = models.BooleanField(default=False) #sets django admin access to false

    objects = RetailerManager()

    #set email as username field
    USERNAME_FIELD  = 'email'
    REQUIRED_FIELDS = ['mobile_no', 'firstname', 'business_name', 'address', 'pincode']


    def get_full_name(self):
        """Retrive fullname of retailer"""

    def __str__(self):
        """Return string representation of retailer"""
        return self.email



