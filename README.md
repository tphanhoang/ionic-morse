# ionic-morse
personnal ionic school project

![Ionic morse logo](https://github.com/tphanhoang/ionic-morse/blob/master/www/img/morse.png?raw=true "ionic morse")

Dans les grandes lignes
--------------------

Ionic-morse est un traducteur traduisant du texte en code morse : 
par exemple, "sos" donnera "··· −−− ···". 

Il est ensuite possible de communiquer le message traduit par les vibrations du téléphone ou par la lumière du téléphone.



Principes
--------------------

Le code morse est un code permettant de transmettre un texte à l’aide de séries d’impulsions courtes et longues, qu’elles soient produites par des signes, une lumière ou un geste. (source :  [wikipédia](https://fr.wikipedia.org/wiki/Morse_(alphabet) "article très complet"))


Le principal principe de l'application est donc de replacer chaque lettre par son équivalent dans le code morse.
Le second est d'utiliser ce code et les possibilités du téléphone pour communiquer ce message traduit.



Difficultés
--------------------

La mise en place et l'utilisation de la flashlight a été plus compliqué que prévu.
(utilisation de :  [Flashlight-PhoneGap-Plugin](https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin). Le développement ne pouvant pas être testé par un émulateur, la simulation sur téléphone était donc nécessaire (sauf que mon téléphone a lâché dans le même moment (RIP))

Le vibreur à été plus since à mettre en place (utilisation de :  [$cordovaVibration]https://github.com/driftyco/ng-cordova/blob/master/src/plugins/vibration.js).

