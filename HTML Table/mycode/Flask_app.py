# Import Flask to allow us to create our app
from flask import Flask, render_template
# Create a new instance of the Flask class called "app"
app = Flask(__name__)

# The "@" decorator associates this route with the function immediately following
users = [
    {'first_name': 'Michael', 'last_name': 'Choi'},
    {'first_name': 'John', 'last_name': 'Supsupin'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]


@app.route('/')
def index():
    print(users[0]["first_name"])
    return render_template('index.html', _users=users)
# import statements, maybe some other routes


@app.route('/dojo')
def dojo():
    return "Dojo!"


# for a route '/users/____/____', two parameters in the url get passed as username and id
@app.route('/repeat/<num>/<word>')
def hello(num, word):
    return render_template('index.html', _word=word, _num=int(num))



if __name__ == "__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True)    # Run the app in debug mode.
# app.run(debug=True) should be the very last statement!
# debug is true always but if you put it in server put it in false
