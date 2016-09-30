from flask import Flask, render_template, Response


app = Flask(__name__, static_url_path="", static_folder="static")


@app.route('/')
def index():
    # app http header
    res = Response(render_template('index.html'))
    # res.headers['Content-Security-Policy'] = "default-src 'self'; style-src 'self' 'unsafe-inline'"
    return res


if __name__ == '__main__':
    app.run()
