from django.db import models
import re
import bcrypt


class UserManager(models.Manager):
    def register_validator(self, postData):
        errors = {}
        EMAIL_REGEX = re.compile(
            r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        # test whether a field matches the pattern
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "Invalid email address!"
        elif len(postData['fname']) < 2:
            errors["fname"] = "first name should be at least 2 characters"
        elif len(postData['lname']) < 2:
            errors["lname"] = "last name should be at least 3 characters"
        elif len(postData['pass']) < 8:
            errors["pass"] = "password should be at least 8 characters"
        elif (postData['pass'] != postData['conpass']):
            errors['conpass'] = "password is not equal to the confirm password"
        return errors

    def login_validator(self, postData):
        errors = {}
        user = User.objects.filter(email=postData['email'])
        if len(user) == 0:
            errors['email'] = "Email or Password is not correct"

        elif (user[0].email != postData['email']):
            errors['email'] = "Email or Password is not correct"

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
