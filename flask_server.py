from flask import Flask, render_template, jsonify

app = Flask(__name__)
list = []

@app.route('/data')
def hello():
    print("잘 들어오나?")
    return render_template('index.html', data='성공했어요')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)