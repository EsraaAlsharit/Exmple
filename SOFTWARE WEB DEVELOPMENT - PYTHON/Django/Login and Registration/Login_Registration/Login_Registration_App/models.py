from django.db import models
from dateutil.relativedelta import relativedelta
# Create your models here.
from django.db import models
from datetime import datetime
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
            errors['emailExist'] = "This email is already in use!"
            return errors
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "Invalid email address!"
        if len(postData['fname']) < 2:
            errors["fname"] = "first name should be at least 2 characters"
        if len(postData['lname']) < 2:
            errors["lname"] = "last name should be at least 3 characters"
        if len(postData['pass']) < 8:
            errors["pass"] = "password should be at least 8 characters"
        if (postData['pass'] != postData['conpass']):
            errors['conpass'] = "password is not equal to the confirm password"
        if (len(postData['birthday']) < 0):
            errors['birthday'] = "birthday is required"
        datetime_object = datetime.now().strftime("%Y-%m-%d")
        if (postData['birthday'] > datetime_object):
            errors['birthdaypast'] = "too young"

        user_birthday = datetime.strptime(postData['birthday'], '%Y-%m-%d')
        if user_birthday > datetime.today() - relativedelta(years=13):
            errors["release_date"] = "User must be at least 13"
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
    fname = models.TextField()
    lname = models.TextField()
    email = models.EmailField()
    birthday = models.DateField()
    password = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
