from allauth.socialaccount.adapter import DefaultSocialAccountAdapter

class MySocialAccountAdapter(DefaultSocialAccountAdapter):
    def pre_social_login(self, request, sociallogin): 
        user = sociallogin.user
        if user.id:  
            return          
        try:
            # if user exists, connect the account to the existing account and login
            customer = Customer.objects.get(email=user.email)  
            sociallogin.state['process'] = 'connect'                
            perform_login(request, customer, 'none')
        except Customer.DoesNotExist:
            pass