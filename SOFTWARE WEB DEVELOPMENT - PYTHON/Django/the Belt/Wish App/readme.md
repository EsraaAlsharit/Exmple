Option A (Wish App)
Make an application where users may post their wishes and keep track of when their wishes come true!


For a red belt:
Login and Registration with validations
Validation errors should appear on the page
Logout feature - the user should not be able to enter the app if not logged in
Dashboard
Dashboard should say "Hello {{user}}"
Display all the wishes the logged user made that have not yet been granted in the top table
Each wish in the top table should have the remove, edit, and granted links
Display all the granted wishes and the users who made them in the bottom table
Display when the granted wishes were made and when they were granted
Clicking the granted link removes the wish from the top table and places it in the bottom table
Make a wish
Validations for empty input fields
Minimum length of three characters for the item and the description
Display errors with flash messages
Redirect back to the dashboard after making a wish or clicking the cancel button
The newly made wish should appear in the top table on the dashboard
Edit a wish
Same validations apply as when creating a wish
Redirect back to the dashboard after editing
The dashboard should show the changes made to the wish
Remove a wish
Clicking the Remove link removes the wish from the database
HTML and CSS reflect the wireframe to at least 75% accuracy
For a black belt:
You must be able to deploy your work to Amazon EC2 and provide the IP address or subdomain/domain name to where your work has been deployed
 Please note that Heroku deployment is not honored
Include the like button for granted wishes
A user may not like a wish more than once
Users may not like their own wishes
Display the total like count for each granted wish
Include the stats page
Display the total number of granted wishes for all users of the app
Display the number of granted wishes for the logged user
Display the number of pending wishes for the logged user
Also:
If you are using Flask, include a file with the SQL script to create your database (this can be copied when you forward engineer your ERD)
Remove your github repo after deploying.
The wireframe is available for download here .

![](pythonWishApp.png)
