function appendMessages(x) {
    let messageBoard = document.getElementById('messageBoard');
    messageBoard.appendChild(x);
    console.log(x);
}

function addMessage(msg) {
    let request = new XMLHttpRequest();
    request.open('POST', 'http://chat.queencityiron.com/messages');
    reqest.addEventListener('load', function () {
        getInfo();
    });
    request.send(JSON.stringify(msg));
}

window.addEventListener('load', function () {
    getInfo();

    let submitBtn = document.getElementById("theButton");
    submitBtn.addEventListener('click', function () {
        addMessage({
            user: document.getElementById('user').value,
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

// theButton.addEventListener('click', function () {
//     sentMessage();
// });