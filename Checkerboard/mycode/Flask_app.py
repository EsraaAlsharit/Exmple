# Import Flask to allow us to create our app
from flask import Flask, render_template
# Create a new instance of the Flask class called "app"
app = Flask(__name__)

# The "@" decorator associates this route with the function immediately following


@app.route('/')  # url
def index():
    # Return the string 'Hello World!' as a response
    return render_template('Checkerboard.html')
# import statements, maybe some other routes


@app.route('/4')  # url
def index2():
    return render_template('Checkerboard2.html')


@app.route('/<x>/<y>')  # url
def index3(x, y):
    return render_template('Checkerboard3.html', _x=int(int(x)/2), _y=int(int(y)/2))


if __name__ == "__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True)    # Run the app in debug mode.
# app.run(debug=True) should be the very last statement!
# debug is true always but if you put it in server put it in false
