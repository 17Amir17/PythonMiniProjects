import socket, psutil, json
from flask import Flask
from flask_cors import CORS, cross_origin

"""
RUN IN ADMINISTRATOR MODE!
"""
host = lambda: socket.gethostname()
cpu_usage = lambda: psutil.cpu_percent()
ram_usage = lambda: psutil.virtual_memory().percent
processes = lambda: [{"process": proc.name(), "PID": proc.pid, "username": proc.username()} for proc in psutil.process_iter()]

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/stats')
@cross_origin()
def stats():
    return json.dumps({"host": host(), "cpu_usage": cpu_usage(), "ram_usage": ram_usage(), "processes": processes()})

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')