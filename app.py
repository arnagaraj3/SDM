from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
import pickle
import numpy as np

app = Flask(__name__)

# MongoDB connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/water_quality_db"  # Change if using MongoDB Atlas
mongo = PyMongo(app)
water_quality_collection = mongo.db.water_quality_data

# Load trained models
regression_model = pickle.load(open("bacteria_regression.pkl", "rb"))
classification_model = pickle.load(open("potability_classifier.pkl", "rb"))

# Water body bacteria thresholds
bacteria_thresholds = {
    "Ocean": 3000,
    "River": 2000,
    "Lake": 1500,
    "Reservoir": 1000,
    "Pond": 2500
}
@app.route("/water-body-summary", methods=["GET"])
def water_body_summary():
    df = pd.read_csv("water_quality.csv")
    summary = df["water_body"].value_counts().to_dict()
    
    response_data = [{"name": key, "value": value} for key, value in summary.items()]
    return jsonify(response_data)
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Water Quality API is running!"})

# ✅ Insert Data from CSV to MongoDB
@app.route("/load-data", methods=["POST"])
def load_data():
    import pandas as pd
    df = pd.read_csv("water_quality.csv")
    df.columns = df.columns.str.lower()
    data = df.to_dict(orient="records")
    water_quality_collection.insert_many(data)
    return jsonify({"message": "Data successfully loaded into MongoDB"})


# ✅ Fetch Data from MongoDB
@app.route("/get-water-data", methods=["GET"])
def get_water_data():
    data = list(water_quality_collection.find({}, {"_id": 0}))  # Exclude MongoDB's default '_id' field
    return jsonify(data)


# ✅ Predict Bacteria Level
@app.route("/predict-bacteria", methods=["POST"])
def predict_bacteria():
    data = request.json
    features = np.array(data["features"]).reshape(1, -1)
    predicted_bacteria = regression_model.predict(features)[0]
    return jsonify({"predicted_bacteria": predicted_bacteria})


# ✅ Predict Water Potability
@app.route("/predict-potability", methods=["POST"])
def predict_potability():
    data = request.json
    features = np.array(data["features"]).reshape(1, -1)
    potability = classification_model.predict(features)[0]
    return jsonify({"potability": int(potability)})


# ✅ Perform Full Analysis
@app.route("/full-analysis", methods=["POST"])
def full_analysis():
    data = request.json
    features = np.array(data["features"]).reshape(1, -1)
    water_body = data["water_body"]

    # Predict bacteria level
    predicted_bacteria = regression_model.predict(features)[0]

    # Determine if bacteria is harmful
    bacteria_harmful = 1 if predicted_bacteria > bacteria_thresholds.get(water_body, 2000) else 0

    # Predict potability
    potability = classification_model.predict(features)[0]

    return jsonify({
        "predicted_bacteria": predicted_bacteria,
        "bacteria_harmful": int(bacteria_harmful),
        "potability": int(potability)
    })


if __name__ == "__main__":
    app.run(debug=True)
