# Cernera.Me Server

Django REST API backend for the Cernera.Me site.

## Prerequisites

- Python 3.10+
- PostgreSQL (or a remote database URL)

## Setup

### 1. Create a virtual environment

```bash
cd server
python -m venv venv
```

### 2. Activate the virtual environment

**macOS / Linux:**
```bash
source venv/bin/activate
```

**Windows:**
```bash
venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure environment variables

Create a `.env` file in the `server/` directory:

```
SECRET_KEY=<your-secret-key>
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:3000
DATABASE_URL=postgres://<user>:<password>@<host>:<port>/<dbname>
DB_SSLMODE=require
DB_SSLROOTCERT=/path/to/ca-certificate.crt
```

| Variable | Description |
|---|---|
| `SECRET_KEY` | Django secret key for cryptographic signing |
| `DEBUG` | Enable debug mode (`True` for local dev) |
| `ALLOWED_HOSTS` | Comma-separated list of allowed hostnames |
| `CORS_ALLOWED_ORIGINS` | Comma-separated origins allowed for CORS |
| `DATABASE_URL` | PostgreSQL connection string |
| `DB_SSLMODE` | SSL mode for the database connection |
| `DB_SSLROOTCERT` | Path to the CA certificate for SSL |

### 5. Run migrations

```bash
python manage.py migrate
```

### 6. Start the dev server

```bash
python manage.py runserver
```

The API will be available at `http://localhost:8000/`.