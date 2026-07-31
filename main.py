import os
import json
import requests
import firebase_admin
from firebase_admin import credentials, firestore


key = os.environ["FIREBASE_KEY"]

service_account = json.loads(key)

cred = credentials.Certificate(service_account)

firebase_admin.initialize_app(cred)

db = firestore.client()


def check_watches():

    watches = db.collection("watches").stream()

    for watch in watches:

        data = watch.to_dict()

        link = data.get("brandLink")

        if not link:
            continue

        try:
            response = requests.get(
                link,
                timeout=15,
                headers={
                    "User-Agent": "Mozilla/5.0"
                }
            )

            if response.status_code == 200:

                page = response.text.lower()
                
                print("STATUS CODE:", response.status_code)
                print("HAS IN STOCK:", "in stock" in page)
                print("HAS OUT:", "out of stock" in page)
                print("HAS SOLD:", "sold out" in page)
                
                if (
                    "out of stock" in page
                    or "sold out" in page
                    or "unavailable" in page
                ):
                    new_status = "out_of_stock"

                elif (
                    "in stock" in page
                    or "only 1 item in stock" in page
                    or "add to bag" in page
                ):
                    new_status = "available"

                else:
                    new_status = "available"

            else:

                new_status = "out_of_stock"

        except Exception:

            new_status = "out_of_stock"


        old_status = data.get("status")


        if old_status != new_status:

            db.collection("watches").document(watch.id).update({
                "status": new_status
            })

            print(
                watch.id,
                "changed:",
                old_status,
                "->",
                new_status
            )

        else:

            print(
                watch.id,
                "OK:",
                old_status
            )



check_watches()
