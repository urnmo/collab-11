
let currentValue = 0;

function appendMessages(x) {
    let messageBoard = document.getElementById('messageBoard');
    messageBoard.appendChild(x);
    console.log(x);
}

function getInfo () {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://chat.queencityiron.com/messages');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);
        console.log(response);
        for (let i = currentValue; i < response.length; i++) {
            if (i < response.length) {
                let newMessage = response[i].user + ": " + response[i].message;
                let received = document.createElement('p');
                received.textContent = newMessage;
                received.classList.add('incoming');
                appendMessages(received);
            }
        }
        currentValue = response.length;
    });
    request.send();
}

function addMessage(msg) {
    console.log (msg);
    let request = new XMLHttpRequest();
    request.open('POST', 'http://chat.queencityiron.com/messages');
    request.addEventListener('load', function () {
        getInfo();
    });
    request.send(JSON.stringify(msg));
}

window.addEventListener('load', function () {
    getInfo();

    let submitBtn = document.getElementById("theButton");
    submitBtn.addEventListener('click', function () {
        addMessage({
            user: document.getElementById('username').value,
            message: document.getElementById('message').value,
        });
        document.getElementById("message").value = "";
    });
});


window.addEventListener('load', function () {
    setInterval(getInfo, 3000);
    getInfo();
});

