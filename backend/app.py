from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

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
