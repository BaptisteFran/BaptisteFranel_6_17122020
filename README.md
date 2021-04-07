# Projet 6 - API Note sauces

### Comment installer ?

###### Récupération de l'API
- Télécharger le dossier de l'api via github (download fichier zip)
- Créer un dossier backend à la racine du projet (vous devriez avoir un dossier backend et un dossier frontend
- Décompresser les fichiers dans le dossier backend

##### Installation de l'API
- Dans votre terminal préféré, rentrez dans le dossier backend (cd .\backend)
- tapez la commande npm init
- Créez un dossier .env à la racine du dossier backend
- Créez un fichier .env et un fichier .env-prod
- Le fichier .env sera le fichier template :

NODE_ENV=template
APP_NAME=My App
API_URL=127.0.0.1
APP_SECRET=
PORT = 3000

- Copiez collez dans le fichier .env-prod le contenu du fichier texte trouvé dans les livrables


#### Lancement du projet
- Dans votre terminal qui doit normalement être dans projet\backend\ tapez npm run prod
- Lancez le serveur Angular
- Utilisez l'application !


### Dépendances :
- NodeJS : Serveur
- Express : Plugins pour création API
- Mongoose : Simplifie les envois de données MongoDB (avec des schemas par exemple)

#### Routes
- Les routes sont faites pour rediriger les requêtes de l'utilisateur vers la bonne fonction

#### Controller
- Les controllers sont des fichiers ou les fonctions font le plus gros du travail (C'est la base des fonctions)

#### Models
- Les models sont la pour formater les données

#### Middleware
- Les middleware utilisés sont Auth et Multer :
     - Auth nous permet de générer un token unique pendant 24h pour pouvoir accéder au contenu de l'API (et du site)
     - Multer est le middleware qui gère la création des images

#### Plugins
- Helmet permet de sécuriser l'application grâce à plusieurs HTTP Headers
     
