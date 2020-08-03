

![resultat](resultat.gif)

L'application My Chatroom est un projet réalisé au cours de ma formation à l'ecole O’clock. Le but de ce projet était de mettre en place un Live chatroom plus précisement un système de messagerie instantannée entre plusieurs client (navigateurs) qui communiquent ensemble à travers un serveur central. La communication peut s'établir de bien des manières, ici j'ai utilisé WebSocket..
fonctionnalités

► On peut envoyer un message à tous les navigateurs connectés.
► On peut changer de pseudo afin de distinguer chaque client.

► Côté front : React.js & React-redux
► Coté back : Node.js & socket.io
Le front a été réalisé sous React.js puis React-redux pour la centralisation des données ainsi que axios pour la communication front-back

La partie back a été réalisé sous node.js. Le serveur permettant la communication entre les clients utilise la librairie socket.io pour réceptionner et renvoyer les requêtes à tous les clients connectés, au moyen d'un WebSocket.

le front envoie au serveur, via le WebSocket socket.io, un objet décrivant le message. Le serveur renvoie ensuite ce message tel quel à tous les clients connectés, mais en rajoutant au passage un id unique à chaque message.
