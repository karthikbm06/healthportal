from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from bson.objectid import ObjectId  # Import ObjectId for MongoDB

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Replace with your MongoDB connection string
client = MongoClient('mongodb://localhost:27017/')
db = client['health_portal']

@app.route('/add-patient', methods=['POST'])
def add_patient():
    data = request.json
    db.patients.insert_one(data)
    return jsonify({"message": "Patient added successfully!"}), 201

@app.route('/view-services', methods=['GET'])
def view_services():
    services = list(db.services.find({}))
    return jsonify(services), 200

@app.route('/manage-patients', methods=['GET'])
def manage_patients():
    patients = list(db.patients.find({}))
    return jsonify(patients), 200

@app.route('/view-appointments', methods=['GET'])
def view_appointments():
    appointments = list(db.appointments.find({}))
    return jsonify(appointments), 200

@app.route('/manage-staff', methods=['POST'])
def manage_staff():
    data = request.json
    db.staff.insert_one(data)
    return jsonify({"message": "Staff managed successfully!"}), 201

@app.route('/view-reports', methods=['GET'])
def view_reports():
    reports = list(db.reports.find({}))
    return jsonify(reports), 200

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Check if the user already exists
    if db.users.find_one({'username': username}):
        return jsonify({"message": "Username already exists!"}), 400

    # Hash the password using the default method (pbkdf2:sha256)
    hashed_password = generate_password_hash(password)

    # Store user in the database
    db.users.insert_one({'username': username, 'password': hashed_password})
    return jsonify({"message": "User  created successfully!"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    user = db.users.find_one({'username': username})
    if user and check_password_hash(user['password'], password):
        return jsonify({"message": "Login successful!"}), 200
    else:
        return jsonify({"message": "Invalid username or password"}), 401

# New endpoint to update a patient's information
@app.route('/update-patient/<id>', methods=['PUT'])
def update_patient(id):
    data = request.json
    # Update the patient in the database
    result = db.patients.update_one({'_id': ObjectId(id)}, {'$set': data})
    
    if result.modified_count > 0:
        return jsonify({"message": "Patient updated successfully!"}), 200
    else:
        return jsonify({"message": "Patient not found or no changes made."}), 404

if __name__ == '__main__':
    app.run(debug=True)