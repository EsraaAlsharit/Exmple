# Assignment: The Wall
### Objectives:
- Practice connecting a Django application to a database
Integrate the login app with another app
- Practice one-to-many relationships
- Practice validating user input and using flash messages
<hr>
Create a wall page (think Facebook news feed) where users will be able to post messages and see the messages posted by other users. Follow the below wireframe.

This app will be integrated with our login app. After successfully logging in or registering, a user should be redirected to `localhost:8000/wall`, where the wall is displayed.

Download the (handout)[https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/flask_wall.png] for the wireframe/ERD:


Once you get the messages functionality working, allow users to post comments for any message. Comments should be in a separate database table from messages.

Helpful Tip

Helpful Tip
In Jinja, say that you made available a variable called 'messages' where 'messages' contained all the messages in the Wall.  For some reason, the following code would not work:

{% for comment in message.comments.all() %}
   <p>{{comment.comment}}</p>
{% endfor %}
copy
This however does work.

{% for comment in message.comments.all %}    # no parentheses!
   <p>{{comment.comment}}</p>
{% endfor %}
copy
Extra Credit I (optional but highly recommended) 
Allow the user to delete his/her own messages.

Extra Credit II (optional but highly recommended)
Allow the user to delete his/her own message but only if the message was made in the last 30 minutes.



Create a new Django project and bring in your login app (or recreate it) and create a new wall app

Set up the necessary models

Allow users to post messages

Display all messages on the main page

Allow users to comment on each message

Display all comments per message

NINJA BONUS: Allow users to delete only their own messages

SENSEI BONUS: Allow the user to delete their own messages only if the message was written within the last 30 minutes

SENSEI BONUS: Use AJAX for adding comments, deleting messages, and deleting comments