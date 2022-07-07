from django.db import models
# models is DB in django


class users(models.Model):
    # auto build id field
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email_address = models.CharField(max_length=255)
    age = models.IntegerField()
    create_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __repr__(self):
        return "first_name: {}".format(self.first_name)

    def __str__(self):
        return f"<Person object:\nid: ({self.id})\nname: {self.name}\nbirth date: {self.birthDate}\nnumber: {self.number} >"
