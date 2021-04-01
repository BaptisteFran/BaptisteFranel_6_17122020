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


### Plugins :
- NodeJS : Serveur
- Express : Plugins pour création API
- Mongoose : Simplifie les envois de données MongoDB (avec des schemas par exemple)
