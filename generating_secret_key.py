import secrets

secret_key = secrets.token_hex(16)
print(f"Generated Secret Key: {secret_key}")