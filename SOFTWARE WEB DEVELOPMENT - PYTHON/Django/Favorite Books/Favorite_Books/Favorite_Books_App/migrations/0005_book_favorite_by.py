# Generated by Django 3.2 on 2022-06-23 01:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Favorite_Books_App', '0004_remove_book_users_who_like'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='Favorite_by',
            field=models.ManyToManyField(related_name='Favorite', to='Favorite_Books_App.User'),
        ),
    ]