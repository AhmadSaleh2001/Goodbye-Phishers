import json
import os
from flask import Flask, jsonify, request
from flask_cors import CORS

from Model import SVM
from Model import Vector


app = Flask(__name__)
cors = CORS(app)



@app.route("/classify/", methods=['POST'])
def return_price():
    URL = request.form.get('URL')
    
    V = Vector.transform([URL])
    Good = SVM.predict(V)

    Ans = {
        "URL": URL,
        "Good": Good[0]
    }
    return jsonify(Ans)


@app.route("/", methods=['GET'])
def default():
    return "<h1> Welcome To Phishing URL Classification<h1>"


if __name__ == "__main__":
    app.run()
