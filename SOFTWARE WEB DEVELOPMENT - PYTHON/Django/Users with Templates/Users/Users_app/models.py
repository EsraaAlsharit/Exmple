from django.db import models


class Users(models.Model):
    fname = models.TextField()
    lname = models.TextField()
    email = models.TextField()
    age = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # def __str__(self):
    #     return f"<Person object:\nid: ({self.id})\nname: {self.fname}\nbirth date: {self.birthDate}\nnumber: {self.number} >"
