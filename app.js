let currentValue = 0;

function getInfo () {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://chat.queencityiron.com/messages');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);

        // currentValue = response.length;
        for (let i = currentValue; currentValue < response.length; i++) {
            if (response.length > i) {
                // currentValue = response.length;
            }
        }

        currentValue = response.length;

        console.log(response);
        let userCollection = response.collection; // not final location
        let userString = userCollection.user; // not final location
        let userText = userCollection.message; // not final location

        // for (let i = 0; i < userCollection.length; i++) {
        //     let receivedUN = document.createElement('p');
        //     receivedUN.textContent = userString[i];
        //     let receivedText = document.createElement('p');
        //     receivedText.textContent = userText[i];
        //     let messageBoard = document.querySelector('section');
        //     messageBoard.appendChild(receivedUN + ": " + receivedText);
        // }
    });
    request.send();
}


window.addEventListener('load', function () {
    // setInterval(getInfo, 3000);
    getInfo();
});