from fastapi import FastAPI

app = FastAPI()

@app.get("/best-gold-price")
def get_best_price():
    return {
        "store": "Gold PMX",
        "price": 88.50,
        "location": "Toronto, ON",
        "lat": 43.65107,
        "lon": -79.347015,
        "url": "https://www.pmx.ca/"
    }
