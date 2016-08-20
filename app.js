let currentValue = 0;


// Questions for this function:
// 1. How can it identify whether the message coming in is
//  being received or being sent?
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
    });
});

// let newInput = document.getElementById("message");
// let currentName = document.getElementById("username");
// let theButton = document.querySelector("button");

// function sentMessage() {
//     let sentMsg = currentName.value + " " + newInput.value;
//     appendMessages(sentMsg);
// }

// // theButton.addEventListener('click', function () {
// //     sentMessage();
// // });

// window.addEventListener('load', function () {
//     // setInterval(getInfo, 3000);
//     getInfo();
// });