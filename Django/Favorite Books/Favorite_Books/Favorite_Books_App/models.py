from distutils.command.upload import upload
from django.db import models
import re
import bcrypt


class UserManager(models.Manager):
    def register_validator(self, postData):
        errors = {}
        EMAIL_REGEX = re.compile(
            r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        # test whether a field matches the pattern
        emails = User.objects.filter(email=postData['email'])
        if len(emails) > 0:
            errors['emailExist'] = "This Email is already in use!"
            return errors
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "Invalid email address!"
        if len(postData['fname']) < 2:
            errors["fname"] = "first name should be at least 2 characters"
        if len(postData['lname']) < 2:
            errors["lname"] = "last name should be at least 2 characters"
        if len(postData['pass']) < 8:
            errors["pass"] = "password should be at least 8 characters"
        if (postData['pass'] != postData['conpass']):
            errors['conpass'] = "password is not equal to the confirm password"
        return errors

    def login_validator(self, postData):
        errors = {}
        user = User.objects.filter(email=postData['email'])
        if len(user) == 0:
            errors['email'] = "Email or Password is not correct"

        if (user[0].email != postData['email']):
            errors['email'] = "Email or Password is not correct"

        if not bcrypt.checkpw(postData['pass'].encode(), user[0].password.encode()):
            errors['passlog'] = "Email or Password is not correct"
        return errors


class User(models.Model):
    fname = models.TextField(max_length=45)
    lname = models.TextField(max_length=45)
    email = models.EmailField(max_length=45)
    password = models.TextField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()


class BookManager(models.Manager):
    def validator(self, postData):
        errors = {}
        if len(postData['title']) == 0:
            errors["title"] = "title is required"
        if len(postData['desc']) < 5:
            errors["desc"] = "desc should be at least 5 characters"
        return errors


class Book(models.Model):
    title = models.CharField(max_length=255)
    desc = models.TextField()
    user = models.ForeignKey(User, related_name="books", on_delete=models.CASCADE)
    Favorite_by = models.ManyToManyField(User, related_name="Favorite")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = BookManager()


