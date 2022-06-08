# Import Flask to allow us to create our app
from flask import Flask, render_template
# Create a new instance of the Flask class called "app"
app = Flask(__name__)

# The "@" decorator associates this route with the function immediately following


@app.route('/play')
def dojo():
    return render_template('index.html')


# for a route '/users/____/____', two parameters in the url get passed as username and id
@app.route('/play/<num>')
def mulBox(num):
    return render_template('index.html',_num=int(num))

@app.route('/play/<num>/<color>')
def mulBoxStyle(num,color):
    render_template('index.html', _color=color, _num=int(num))

@app.route('/<any>')
def error(any):
    return "Sorry! No response. Try again."


if __name__ == "__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True)    # Run the app in debug mode.
# app.run(debug=True) should be the very last statement!
# debug is true always but if you put it in server put it in false
