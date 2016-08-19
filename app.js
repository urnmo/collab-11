function receivedMessage () {
    console.log("received Message");
    let request = new XMLHttpRequest();
    request.open('GET', 'http://chat.queencityiron.com/messages');
    request.addEventListener('load', function () {
        let delivery = JSON.parse(request.responseText);
        console.log(delivery);
        let userCollection = delivery.collection; // not final location
        let userString = userCollection.user; // not final location
        let userText = userCollection.message; // not final location

        let parent = document.querySelector('body');
        let messageBoard = document.createElement('section');
        parent.appendChild(messageBoard);

        for (let i = 0; i < userCollection.length; i++) {
            let receivedUN = document.createElement('p');
            receivedUN.textContent = userString[i];
            let receivedText = document.createElement('p');
            receivedText.textContent = userText[i];
            messageBoard.appendChild(receivedUN + ": " + receivedText);
        }
    });
    request.send();
}


window.addEventListener('load', function () {
    // setInterval(receivedMessage, 3000);
    receivedMessage();
});