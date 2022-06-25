from django.db import models


class CourseManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        # add keys and values to errors dictionary for each invalid field
        if len(postData['name']) < 5:
            errors["name"] = "Course name should be at least 5 characters"
        if len(postData['desc']) < 15:
            errors["desc"] = "Course description should be at least 15 characters"
        return errors

    def validator(self, postData):
        errors = {}
        if len(postData['comm']) < 0:
            errors["comm"] = "Course comment should be at least 1 characters"
        return errors


class Desc(models.Model):
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Comment(models.Model):
    comm = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = CourseManager()


class Course(models.Model):
    name = models.TextField()
    des = models.ForeignKey(Desc, related_name="course_desc", on_delete=models.CASCADE)
    comm = models.ManyToManyField(Comment, related_name="course_comm")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = CourseManager()
