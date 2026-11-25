import os
import json
import psycopg2
from http.server import BaseHTTPRequestHandler

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            # Read incoming JSON data from the React form
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            data = json.loads(body.decode('utf-8'))

            # Connect to PostgreSQL using Vercel's environment variable
            conn = psycopg2.connect(os.environ.get("DATABASE_URL"))
            cur = conn.cursor()

            # Insert form fields into your PostgreSQL registrations table
            cur.execute("""
                INSERT INTO registrations
                (name, age, phone, email, test, hospital, location, referred_by)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
            """, (
                data.get('name'),
                data.get('age'),
                data.get('phone'),
                data.get('email'),
                data.get('test'),
                data.get('hospital'),
                data.get('location'),
                data.get('referred_by') if data.get('referred_by') != 'Other' else data.get('referred_by_other')
            ))

            conn.commit()
            cur.close()
            conn.close()

            # Send success response back to React
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"success": True, "message": "Registration successful!"}).encode('utf-8'))

        except Exception as e:
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))