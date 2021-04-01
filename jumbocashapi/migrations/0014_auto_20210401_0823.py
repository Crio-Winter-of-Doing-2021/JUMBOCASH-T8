# Generated by Django 3.1.7 on 2021-04-01 08:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jumbocashapi', '0013_auto_20210326_0515'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='email_id',
            field=models.EmailField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='supplier',
            name='email_id',
            field=models.EmailField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='customer',
            name='mobile_no',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='supplier',
            name='mobile_no',
            field=models.CharField(max_length=10),
        ),
    ]