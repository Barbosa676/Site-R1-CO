from flask import Flask

app = Flask(__name__)


@app.route("/")
def index():
    return "<h1>Hello, World!</h1>"

@app.route("/sum/<int:a>/<int:b>")
def sum(a,b):
    return f"{a} + {b} = {a + b}"

if __name__ == "__main__":
    app.run(debug=True)