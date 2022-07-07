# Multiple Apps

### Objectives:

- Practice creating Django apps
- Get familiar with a Django project with multiple apps
<hr>
With Django, it's easy to create multiple apps that can be used across multiple projects. Let's say that you're a freelancer and have worked with many clients in the past. Say that almost every single project you've worked on, the client/project wants their own blogs, surveys, and user management system. Instead of having to re-create these modules each time from scratch, you decide to create three independent apps that you can utilize across all of these projects.

Add 2 additional apps, **surveys** and **users** to your project from the First Django Project assignment. (If you've forgotten how to create just an app, refer to all of step 5 (a-e) in the Creating a Django Project module.)

- **blogs** - update the routes as follows (content is the same):
    - /blogs - display the string "placeholder to later display a list of all blogs" with a method named "index"
    - /blogs/new - display the string "placeholder to display a new form to create a new blog" with a method named "new"
    - /blogs/create - redirect to the "/blogs" route with a method called "create"
    - /blogs/<number> - display the string "placeholder to display blog number: {{number}}" with a method named "show"
    - /blogs/<number>/edit - display the string "placeholder to edit blog {{number}}" with a method named "edit"
    - /blogs/<number>/delete - redirect to the "/blogs" route with a method called "destroy"
- **surveys**
    - /surveys - display the string "placeholder to display all the surveys created"
    - /surveys/new - display "placeholder for users to add a new survey"
- **users**
    - /register - display the string "placeholder for users to create a new user record"
    - /login - display the string "placeholder for users to log   - in"
    - /users/new - have the same method that handles /register also handle the url request of /users/new
    - /users - display the string "placeholder to later display all the list of users"
### Hint:

Notice how the blogs and surveys routes all begin with the same pattern, but the users app routes do not. This means our project urls.py file should look something like this:

### project_name/project_name/urls.py
```md
urlpatterns = [
    path('/blogs', include('blog_app.urls')),
    path('/surveys', include('survey_app.urls')),
    path('', include('users_app.urls')),
]
````
Then, in the respective blogs and surveys app urls.py files, we only need to include the remainder of the route to match!

**A reminder about redirecting: you should always provide the whole path, starting with the first /.**


- [x] Add a surveys app and a users app to your first Django project

- [x] Complete the /blogs route

- [x] Complete the /blogs/new route

- [x] Complete the /blogs/create route

- [x] Complete the /blogs/<number> route

- [x] Complete the /blogs/<number>/edit route

- [x] Complete the /blogs/<number>/delete route

- [x] Complete the /surveys route

- [x] Complete the /surveys/new route

- [x] Complete the /register route

- [x] Complete the /login route

- [x] Complete the /users/new route

- [x] Complete the /users route

- [ ] NINJA BONUS: Have the root route utilize the same method as the /blogs route