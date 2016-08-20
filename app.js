let currentValue = 0;

function appendMessages(x) {
    let received = document.createElement('p');
    received.textContent = x;
    let messageBoard = document.getElementById('messageBoard');
    messageBoard.appendChild(received);
    received.classList.add('incoming');
    console.log(x);
}

let newInputValue = document.getElementById("message")
let currentName = document.getElementById("username");

function sentMessage(){
    let sentMsg = currentName.value + newInputValue.value;
    let theButton = document.querySelector('button');
    theButton.addEventListener('click', appendMessages(sentMsg));
}



function getInfo () {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://chat.queencityiron.com/messages');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);
        console.log(response);
        for (let i = currentValue; currentValue < response.length; i++) {
            if (i < response.length) {
                let newMessage = response[i].user + ": " + response[i].message;
                appendMessages(newMessage);
            }
        }

        currentValue = response.length;
        
    });
    request.send();
}


window.addEventListener('load', function () {
    // setInterval(getInfo, 3000);
    getInfo();
});