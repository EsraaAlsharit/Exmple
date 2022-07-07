# Import Flask to allow us to create our app

from flask import Flask, render_template, request, redirect
# Create a new instance of the Flask class called "app"
app = Flask(__name__)

# The "@" decorator associates this route with the function immediately following


@app.route('/')
def index():
    return render_template('index.html')
# import statements, maybe some other routes


@app.route('/result', methods=["POST"])
def dojo():
    print(request.form)
    name = request.form['name']
    loc = request.form['loc']
    lang = request.form['lang']
    comm = request.form['comm']

    return render_template('index.html', _name=name, _loc=loc, _lang=lang, _comm=comm)


@app.route('/<any>')
def error(any):
    return "Sorry! No response. Try again."


if __name__ == "__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True)    # Run the app in debug mode.
# app.run(debug=True) should be the very last statement!
# debug is true always but if you put it in server put it in false
