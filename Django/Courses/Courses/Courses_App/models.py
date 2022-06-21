from django.db import models


class CourseManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        # add keys and values to errors dictionary for each invalid field
        if len(postData['name']) < 5:
            errors["name"] = "Show name should be at least 5 characters"
        if len(postData['desc']) < 15:
            errors["desc"] = "Show description should be at least 15 characters"
        return errors


class Course(models.Model):
    name = models.TextField()
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = CourseManager()
