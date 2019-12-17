﻿# AppCedricCorrection

Angular
----------------------------------------------------------------------------------------------------------------------------
INSTALLATION
-------------------------------------------------------------------------------------------------------------------------
1- Telecharger et installer Node JS
	Site officiel de NodeJS
	npm -v (verification de la version)
2- Installer npm
	I>> npm install -g npm@latest

3- Installation du CLI
	I>> npm install -g @angular/cli

4- Version Angular
	I>> ng version
-------------------------------------------------------------------------------------------------------------------------
PROJET
-------------------------------------------------------------------------------------------------------------------------
4- Le projet
	a) Creation			
		I>> ng new nom-du-projet
		Choisir le styles SCSS
	b) installation de Bootstrap	
		I>>npm install bootstrap 	
	c) ajouter dans le fichier styles.css au niveau du projet
	@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
-------------------------------------------------------------------------------------------------------------------------
SERVEUR
-------------------------------------------------------------------------------------------------------------------------
5- Lancer et voir l'application du projet
	I>> ng serve (lancement du serveur)
	I>> Dans la barre du navigateur taper localhost:4200 (le port par defaut)
	ou
	I>> Directement ng serve --open (ouvre le navigateur en mm tps)
	I >> Vous pouvez choisir votre propore port port ng serve --port 5050
6- Arret du serveur
	I>> ctlr + c
-------------------------------------------------------------------------------------------------------------------------
COMPONENT / CLASS / SERVICE / ROUTING
-------------------------------------------------------------------------------------------------------------------------
Dans le dossier du projet 
	I>> ng generate component nom-du-component 
	raccourci ng g c nom-du-component

Dans le dossier projet
  I>> ng generate service nomDeClass
	I>> ng generate class nomDeClass
	I>> ng generate module nomDuModule --routing

**************************************************************************************

 ;-) Penser à faire un npm install quand vous récupérez un projet extérieur

 
