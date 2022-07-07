# Import Flask to allow us to create our app
from flask import Flask, render_template
# Create a new instance of the Flask class called "app"
app = Flask(__name__)

# The "@" decorator associates this route with the function immediately following
@app.route('/')
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response
# import statements, maybe some other routes

@app.route('/dojo')
def dojo():
    return "Dojo!"

# app.run(debug=True) should be the very last statement!


# for a route '/hello/____' anything after '/hello/' gets passed as a variable 'name'
@app.route('/say/<name>')
def name(name):
    return "Hi "+name+"!"


# for a route '/users/____/____', two parameters in the url get passed as username and id
@app.route('/repeat/<num>/<word>')
def hello(num, word):
    return render_template('index.html', _word=word, _num=int(num))

@app.route('/<any>')
def error(any):
    return "Sorry! No response. Try again."


if __name__ == "__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True)    # Run the app in debug mode.
