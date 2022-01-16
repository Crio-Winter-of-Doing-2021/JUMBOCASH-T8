import re
from django.core.exceptions import ValidationError


def validate_contact_number(number):
    match = re.match(pattern="^[6-9]\d{9}$", string=number)
    error_message = "Enter a valid Contact number."
    if match is None:
        raise ValidationError(error_message)