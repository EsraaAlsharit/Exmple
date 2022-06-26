from django.db import models
from datetime import datetime
import re
import bcrypt


class UserManager(models.Manager):
    def register_validator(self, postData):
        errors = {}
        EMAIL_REGEX = re.compile(
            r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        emails = User.objects.filter(email=postData['email'])
        if len(emails) > 0:
            errors['emailExist'] = "This Email is already in use!"
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "Invalid email address!"
        elif len(postData['fname']) < 2:
            errors["fname"] = "first name should be at least 2 characters"
        elif len(postData['lname']) < 2:
            errors["lname"] = "last name should be at least 3 characters"
        elif len(postData['pass']) < 8:
            errors["pass"] = "password should be at least 8 characters"
        elif (postData['pass'] != postData['cpass']):
            errors['cpass'] = "password is not equal to the confirm password"
        return errors

    def login_validator(self, postData):
        errors = {}
        user = User.objects.filter(email=postData['email'])
        if len(user) == 0:
            errors['none'] = "Email or Password is not correct"

        elif (user[0].email != postData['email']):
            errors['notfound'] = "Email or Password is not correct"

        elif not bcrypt.checkpw(postData['pass'].encode(), user[0].password.encode()):
            errors['passlog'] = "Email or Password is not correct"
        return errors


class User(models.Model):
    fname = models.TextField()
    lname = models.TextField()
    email = models.EmailField()
    password = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()


class TripManager(models.Manager):
    def validator(self, postData):
        errors = {}
        if len(postData['dest']) < 3:
            errors["dest"] = "Destination should be at least 3 characters"
        if len(postData['plan']) < 3:
            errors["plan"] = "Plan should be at least 3 characters"
        if len(postData['edate']) == 0:
            errors["edate"] = "end date should is required"
        if len(postData['sdate']) == 0:
            errors["sdate"] = "start date should is required"

        datetime_object = datetime.now().strftime("%Y-%m-%d")
        if (postData['sdate'] < datetime_object):
            errors["datetoday"] = "start date should be in future time"
            
        if postData['sdate'] > postData['edate']:
            errors["date"] = "this time is not allowed, end date should be after star date "
        return errors


class Trip(models.Model):
    dest = models.CharField(max_length=255)
    Sdate = models.DateField()
    Edate = models.DateField()
    plan = models.TextField()
    user = models.ForeignKey(User, related_name="trip",on_delete=models.CASCADE)
    list = models.ManyToManyField(User, related_name="trip_list")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = TripManager()
