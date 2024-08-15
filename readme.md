```
Media College Denmark
```

# Kom igang.

Følg følgende trin.

## 1. Opret en .env og .env.local fil i roden af projektet.

Indsæt dette indhold:
```
# Secret Variables for use in Server Application.
NODE_ENV=development

SERVER_PORT=3042
SERVER_HOST=http://localhost:3042

MONGODB_URI=mongodb://127.0.0.1:27017/mcdm-takmanager

# JWT
JWT_EXPIRES_IN="1t"
JWT_SECRET="8e18fa26acc704d3ca37fea29e17e8e024423a7c3eab4b76390a94ac579c20f0"
```

## 2. Kør Seed in NPM Scripts.

Tryk på knappen i 'NPM Script' i visual kode.

Eller benyt kommandoen

```
npm run seedAll
```

## 3. Opret et lokalt branch.

Opret og skift til ey lokalt branch du kalder feks. "dev-server".

## 4. Åbn Mongo Compass.

Åbn Mongo Compass og se din "mcdm-takmanager".

## 5. Start serveren.

Kør "start" i 'NPM Script' i visual kode.

## 6. Åbn Postman.

Importér 'postman_01.json' som "Backend Taskmanager".
Opret et Taskmanager environment i post man og tilføj `api_local_path` og sæt den til `http://localhost:3042`.
Opret også en `token` variabel og benyt den når du bruger "auth/signin".

Test `Get Users` endpointet.
