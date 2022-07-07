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


class Messages(models.Model):
    user_id = models.TextField()
    messages = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = MessManager()
