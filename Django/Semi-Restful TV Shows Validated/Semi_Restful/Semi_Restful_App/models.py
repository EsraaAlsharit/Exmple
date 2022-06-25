from django.db import models
from datetime import datetime
from datetime import date


class ShowManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        titles = Show.objects.filter(title=postData['title'])
        if len(titles) > 0:
            errors['titleExist'] = "This title is already in use!"
            return errors
        if len(postData['title']) < 2:
            errors["title"] = "title should be at least 2 characters"
        if len(postData['network']) < 3:
            errors["network"] = "network should be at least 3 characters"
        if len(postData['release_date']) < 0:
            errors["release_date"] = "Release Date is required"
        datetime_object = datetime.now().strftime("%Y-%m-%d")
        if postData['release_date'] >= datetime_object:
            if len(postData['desc']) < 10:
                errors["desc"] = "Description should be at least 10 characters"
            # errors["release_date"] = "Release Date should be in past"
        return errors


class Show(models.Model):
    title = models.TextField()
    network = models.TextField()
    releaseDate = models.DateField()
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()
