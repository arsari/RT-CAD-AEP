from flask import Flask, jsonify, render_template
import random

app = Flask(__name__)

# Simulate some customer journey data
def get_fake_aep_data():
    return {
        "customers": [
            {"id": 1, "name": "John Doe", "segment": "High-Value", "conversion_rate": 75},
            {"id": 2, "name": "Jane Smith", "segment": "Low-Value", "conversion_rate": 20},
            {"id": 3, "name": "Sam Lee", "segment": "Medium-Value", "conversion_rate": 50}
        ],
        "metrics": {
            "overall_conversion_rate": 48,
            "active_users": random.randint(50, 100),
            "dropoff_rate": random.randint(10, 50)
        }
    }

# Root route to serve the front-end
@app.route('/')
def index():
    return render_template('index.html')

# API to serve customer data
@app.route('/api/data')
def get_data():
    return jsonify(get_fake_aep_data())

if __name__ == '__main__':
    app.run() # debug=True
