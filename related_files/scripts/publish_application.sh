#!/bin/bash

function apply_pause() {
  read -p "$*"
}

echo "Publication de l'applications sur le serveur Web local"
apply_pause "Appuyer sur la touche [Retour] pour continuer..."

# Source (so)
so=/home/Exercises/angular-e03/dist/angular-e03/browser
# Destination (de)
de=/var/www/html/d002/angular-e03

rm $de/favicon.ico
rm $de/index.html
rm $de/main*.js
rm $de/polyfills*.js
rm $de/styles*.css
cp $so/*.* $de/
sed -i 's/<base href="\/">/<base href="\/d002\/angular-e03\/">/g' $de/index.html
