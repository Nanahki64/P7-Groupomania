# P7-Groupomania

###### Étape 1 - Cloner le repo :
```
git clone https://github.com/Nanahki64/P7-Groupomania.git
```

###### Étape 2 - installer le projet :

```
cd backend
npm install

puis

cd..
cd frontend
npm install
```

###### Étape 3 - backend/.env :

```
Renommer le fichier .env.template en .env et remplacer les clefs par celle fournis dans le fichier zip (DATABASE_URL & JWT_SECRET_KEY).
```

###### Étape 4 - Prisma client :

```
npx prisma generate
```

###### Étape 5 - démarrer le projet :

```
backend
node server

frontend
ng serve
```