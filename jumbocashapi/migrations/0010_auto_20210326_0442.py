# Generated by Django 3.1.7 on 2021-03-26 04:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jumbocashapi', '0009_auto_20210326_0438'),
    ]

    operations = [
        migrations.RenameField(
            model_name='expensetransaction',
            old_name='sup_id',
            new_name='sup',
        ),
        migrations.RenameField(
            model_name='incometransaction',
            old_name='cust_id',
            new_name='cust',
        ),
        migrations.RenameField(
            model_name='supplier',
            old_name='ret_id',
            new_name='ret',
        ),
    ]
