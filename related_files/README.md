# angular-e03 &mdash; Reproduction de l'exercice officiel de Angular
[README](../README.md) &mdash; Angular

## Démonstration
https://ghislaincoutu.ca/d002/angular-e03

## Packet NPM à installer
```sh
npm install angular-in-memory-web-api
```

## Commandes Angular à exécuter pour générer les composants de l'exercice
REMARQUE : Avant de générer la commande suivante, il faut supprimer le fichier app-routing.module.ts.
```sh
ng generate module app-routing --flat --module=app

ng generate component menu
ng generate component footer
ng generate component heroes
ng generate component hero-detail
ng generate component hero-search
ng generate component dashboard
ng generate component messages

ng generate service hero
ng generate service message
ng generate service in-memory-data
```
