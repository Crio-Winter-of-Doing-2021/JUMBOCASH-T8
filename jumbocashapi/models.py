from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.models import BaseUserManager
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


payment_mode_choices = (
    ('1', 'Cash'),
    ('2', 'Card'),
    ('3', 'UPI'),
    ('4', 'Other Online Mode')
    
)

inc_payment_status_choices = (
    ('1', 'Pending'),
    ('2', 'Received')
)

exp_payment_status_choices = (
    ('1', 'Pending'),
    ('2', 'Paid')
)

trans_type_choices = (
    ('1', 'income'),
    ('2', 'expense')
)


class RetailerManager(BaseUserManager):
    """Manager for Retailer"""

    def update_or_create_user(self, email, password, **kwargs):
        """Create a new retailer profile"""
        if not email:
            raise ValueError('User must have an email id')
        
        # makes email to lowercase 
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


class Customer(models.Model):
    """Model for customer enity (cash inflow entity)"""
    firstname   = models.CharField(max_length=255)
    lastname    = models.CharField(max_length=255, blank=True)
    mobile_no   = models.CharField(max_length=10, blank=True)
    email_id    = models.EmailField(max_length=255, unique=True, blank=True)
    ret_id      = models.ForeignKey(Retailer, on_delete=models.CASCADE)

    REQUIRED_FIELDS = ['firstname']

    def __str__(self):
        """Return string representation of customer"""
        return self.firstname

class Supplier(models.Model):
    """Model for customer enity (cash outflow entity)"""
    firstname   = models.CharField(max_length=255)
    lastname    = models.CharField(max_length=255, blank=True)
    mobile_no   = models.CharField(max_length=10, blank=True)
    email_id    = models.EmailField(max_length=255, unique=True, blank=True)
    ret_id      = models.ForeignKey(Retailer, on_delete=models.CASCADE)

    REQUIRED_FIELDS = ['firstname']

    def __str__(self):
        """Return string representation of supplier"""
        return self.firstname

class IncomeTransaction(models.Model):
    """Model for cash inflow transaction entity"""
    trans_date_time  = models.DateTimeField(auto_now_add=True, blank=True)
    amount           = models.IntegerField()
    note             = models.CharField(max_length=255)
    description      = models.CharField(max_length=255, blank=True)
    payment_mode     = models.CharField(max_length=50, choices=payment_mode_choices)
    payment_status   = models.CharField(max_length=50, choices=inc_payment_status_choices)
    due_date         = models.DateField(blank=True, null=True)
    cust_id          = models.ForeignKey(Customer, on_delete=models.CASCADE)
 

    def __str__(self):
        """Return string representation of incomeTransaction"""
        return self.note + "    "+ str(self.trans_date_time)

class ExpenseTransaction(models.Model):
    """Model for cash outflow transaction entity"""
    trans_date_time  = models.DateTimeField(auto_now_add=True, blank=True)
    amount           = models.IntegerField()
    note             = models.CharField(max_length=255)
    description      = models.CharField(max_length=255, blank=True)
    payment_mode     = models.CharField(max_length=50, choices=payment_mode_choices)
    payment_status   = models.CharField(max_length=50, choices=exp_payment_status_choices)
    due_date         = models.DateField(blank=True, null=True)
    sup_id           = models.ForeignKey(Supplier, on_delete=models.CASCADE)

    def __str__(self):
        """Return string representation of expenseTransaction"""
        return self.note + "    "+ str(self.trans_date_time)


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    """Creates token when a new Retailer is created"""
    if created:
        Token.objects.create(user=instance)

